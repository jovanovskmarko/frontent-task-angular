import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhotos } from '../../interfaces/photos';
import { PhotosService } from '../../service/photos.service';
import { GeneralService } from '../../../shared/service/general/general.service';

@Component({
  templateUrl: './photos-detail.component.html',
})
export class PhotosDetailComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private service: PhotosService,
    public generalService: GeneralService
  ) {}
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

  ngOnDestroy(): void {
    this.generalService.showModal = false;
  }

  onClick(): void {
    this.generalService.showModal = true;
  }
}
