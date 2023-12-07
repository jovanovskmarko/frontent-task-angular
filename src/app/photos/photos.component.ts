import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Subscription } from 'rxjs';
import { IPhotos } from './photos';

@Component({
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit {
  constructor(private photoService: PhotosService) {}

  subscription: Subscription | undefined;
  photos: IPhotos[] = [];
  errorMessage: string = '';
  title: string = 'Mini Instagram';

  ngOnInit(): void {
    this.subscription = this.photoService.getProducts().subscribe({
      next: (photos) => {
        this.photos = photos;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
