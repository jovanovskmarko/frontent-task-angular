import { Component, OnChanges, OnInit } from '@angular/core';
import { PhotosService } from '../../service/photos.service';
import { Subscription } from 'rxjs';
import { IPhoto } from '../../interfaces/photo';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';

@Component({
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
  standalone: true,
  imports: [
    MatCardModule,
    RouterModule,
    CommonModule,
    TruncatePipe,
    PaginatorComponent,
  ],
})
export class PhotoComponent implements OnInit, OnChanges {
  constructor(
    private photoService: PhotosService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(): void {
    this.route.queryParams.subscribe(
      (param) =>
        (this.subscription = this.photoService
          .loadPhotos(param['pageIndex'])
          .subscribe({
            next: (photos) => {
              this.photos = photos;
            },
          }))
    );
  }

  subscription: Subscription | undefined;
  photos: IPhoto[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (param) =>
        (this.subscription = this.photoService
          .loadPhotos(param['pageIndex'] || 1)
          .subscribe({
            next: (photos) => {
              this.photos = photos;
            },
          }))
    );
  }
}
