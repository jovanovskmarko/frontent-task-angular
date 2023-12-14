import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../service/photos.service';
import { Subscription } from 'rxjs';
import { IPhotos } from '../../interfaces/photos';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    CommonModule,
    MatButtonModule,
    NavMenuComponent,
  ],
})
export class PhotosComponent implements OnInit {
  constructor(private photoService: PhotosService) {}

  subscription: Subscription | undefined;
  photos: IPhotos[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.subscription = this.photoService.loadPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
      },
      error: (err) => console.log('Error loading photos ', err.errorMessage),
    });
  }
}
