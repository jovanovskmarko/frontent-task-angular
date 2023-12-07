import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { PhotosService } from '../../photos/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements AfterViewInit {
  @ViewChild('modal') modal!: ElementRef;
  id: number = 1;

  constructor(private service: PhotosService, private router: Router) {}

  ngAfterViewInit(): void {}

  onDelete(): void {
    this.service.deletePhoto(this.id).subscribe({
      next: () => {
        this.router.navigate(['/photos']);
      },
      error: (err) => {
        console.error('Error deleting photo:', err);
      },
    });
  }
}
