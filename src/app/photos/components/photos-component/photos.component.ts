import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../service/photos.service';
import { Subscription } from 'rxjs';
import { IPhotos } from '../../interfaces/photos';

@Component({
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit {
  constructor(private photoService: PhotosService) {}

  subscription: Subscription | undefined;
  photos: IPhotos[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.subscription = this.photoService.getProducts().subscribe({
      next: (photos) => {
        this.photos = photos;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
