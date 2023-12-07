import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhotos } from './photos';
import { PhotosService } from './photos.service';

@Component({
  templateUrl: './photos-detail.component.html',
})
export class PhotosDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: PhotosService) {}
  pageTitle: string = '';
  img: IPhotos | undefined;
  id: number = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProductByID(this.id).subscribe({
      next: (result) => {
        this.img = result;
      },
    });
  }
}
