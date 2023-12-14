import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhotos } from '../../interfaces/photos';
import { PhotosService } from '../../service/photos.service';
import { GeneralService } from '../../../shared/service/general/general.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDetailsDialog } from '../photos-dialog/photos-dialog.component';

@Component({
  templateUrl: './photos-detail.component.html',
  styleUrl: './photos-detail.component.css',
})
export class PhotosDetailComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private service: PhotosService,
    public generalService: GeneralService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PhotoDetailsDialog, {
      data: { id: this.id },
    });
  }

  img: IPhotos | undefined;
  id: number = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPhotoByID(this.id).subscribe({
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
