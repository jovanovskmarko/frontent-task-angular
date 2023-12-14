import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../../photos/service/photos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhotos } from '../../../photos/interfaces/photos';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class FormComponent implements OnInit {
  imgObject: IPhotos = {
    title: '',
    url: '',
    thumbnailUrl: '',
    id: 1,
    albumId: 1,
  };
  id: number | undefined;
  title: string = 'Upload image';

  constructor(
    private service: PhotosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.service.getPhotoByID(this.id).subscribe({
        next: (image) => (this.imgObject = { ...image }),
        error: (error) => console.log(error.message),
      });
      this.title = 'Edit image';
    }
  }

  onSubmit(): void {
    console.log('called');
    if (this.id) {
      this.service.editPhoto(this.id, this.imgObject).subscribe({
        next: (result) => console.log(result),
        error: (error) => console.error('Error updating photo:', error.message),
      });
    } else {
      this.service.uploadPhoto(this.imgObject).subscribe({
        next: (result) => console.log(result),
        error: (error) => console.log('Error uploading photo', error.message),
      });
    }

    this.router.navigate(['/photos']);
  }
}
