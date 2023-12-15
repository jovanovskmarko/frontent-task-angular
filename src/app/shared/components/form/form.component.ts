import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../../photos/service/photos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from '../../../photos/interfaces/photo';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

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
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class FormComponent implements OnInit {
  imgObject: IPhoto = {
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
      });
      this.title = 'Edit image';
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.id) {
        this.service.editPhoto(this.id, this.imgObject).subscribe();
      } else {
        this.service.uploadPhoto(this.imgObject).subscribe();
      }
      this.router.navigate(['/photos']);
    }
  }
}
