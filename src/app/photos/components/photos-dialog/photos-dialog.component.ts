import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { PhotosService } from '../../service/photos.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DialogData } from '../../interfaces/dialog-data';

@Component({
  selector: 'photos-dialog',
  templateUrl: 'photos-dialog.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class PhotoDetailsDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private photosService: PhotosService,
    private router: Router
  ) {}

  confirmDelete(): void {
    this.photosService.deletePhoto(this.data.id).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/photos']);
      },
      error: (err) => {
        console.error('Error deleting photo:', err);
      },
    });
  }
}
