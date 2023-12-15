import { Component } from '@angular/core';
import { PhotosService } from '../../../photos/service/photos.service';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  constructor(public service: PhotosService) {}
}
