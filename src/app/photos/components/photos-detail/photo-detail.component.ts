import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhotosService } from '../../service/photos.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDetailsDialog } from '../photos-dialog/photo-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IPhoto } from '../../interfaces/photo';

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
    public dialog: MatDialog,
    private router: Router
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
