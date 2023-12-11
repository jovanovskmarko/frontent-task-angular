import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhotosService } from '../../../photos/service/photos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhotos } from '../../../photos/interfaces/photos';

@Component({
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  imgObject: IPhotos | undefined;
  id: number | undefined;

  constructor(
    private service: PhotosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.service.getProductByID(this.id).subscribe({
        next: (image) => (this.imgObject = { ...image }),
        error: (error) => console.log(error.message),
      });
    }
  }

  onSubmit(form: NgForm): void {
    const imgObject = {
      id: 1,
      albumId: 1,
      title: form.value.title,
      url: form.value.url,
      thumbnailUrl: form.value.thumbnailUrl,
    };

    if (this.id) {
      this.service.editPhoto(this.id, imgObject).subscribe({
        next: (result) => console.log(result),
        error: (error) => console.error('Error updating photo:', error),
      });
    } else {
      this.service.uploadPhoto(imgObject).subscribe({
        next: (result) => console.log(result),
        error: (error) => error.message,
      });
    }

    this.router.navigate(['/photos']);
  }
}
