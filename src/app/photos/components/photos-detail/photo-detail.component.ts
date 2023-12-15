import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IPhoto } from '../../interfaces/photo';
import { PhotosService } from '../../service/photos.service';
import { PhotoDetailsDialog } from '../photos-dialog/photo-dialog.component';

@Component({
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.css',
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
  img: IPhoto | undefined;
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
