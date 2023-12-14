import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhotos } from '../../interfaces/photos';
import { PhotosService } from '../../service/photos.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDetailsDialog } from '../photos-dialog/photos-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  templateUrl: './photos-detail.component.html',
  styleUrl: './photos-detail.component.css',
  standalone: true,
  imports: [
    MatCardModule,
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class PhotosDetailComponent implements OnInit {
  img: IPhotos | undefined;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: PhotosService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    this.dialog.open(PhotoDetailsDialog, {
      data: { id: this.id },
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPhotoByID(this.id).subscribe({
      next: (result) => {
        this.img = result;
      },
    });
  }
}
