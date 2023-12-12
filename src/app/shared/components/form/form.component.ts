import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../../photos/service/photos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhotos } from '../../../photos/interfaces/photos';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  // proveri dali moze da se prati objekt so samo 3 properties za create new image i dali da se napravi razlicen?

  imgObject: IPhotos = {
    title: '',
    url: '',
    thumbnailUrl: '',
    id: 1,
    albumId: 1,
  };
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

  // dali da ja predadam formata kako element na submit ili vaka e okej
  onSubmit(form: NgForm): void {
    // kako da generiram id napravi if? za da znae koga da bide od update istoto a koga novo da kreira?

    // vidi so apito kako e dali e ok isto i za upload pri upload samo stava id i album id a pri create treba sam valjda i
    //dali treba site sliki od site albumi ili samo eden?
    if (this.id) {
      this.service.editPhoto(this.id, this.imgObject).subscribe({
        next: (result) => console.log('ova e od subscribe ', result),
        error: (error) => console.error('Error updating photo:', error),
      });
    } else {
      this.service.uploadPhoto(this.imgObject).subscribe({
        next: (result) => console.log('ova e od subscribe ', result),
        error: (error) => console.log(error.message),
      });
    }

    this.router.navigate(['/photos']);
  }
}
