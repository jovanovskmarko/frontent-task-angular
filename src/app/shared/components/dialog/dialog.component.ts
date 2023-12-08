import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { PhotosService } from '../../../photos/service/photos.service';
import { Router } from '@angular/router';
import { GeneralService } from '../../service/general/general.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent implements AfterViewInit {
  @ViewChild('modal') modal!: ElementRef;
  id: number = 1;

  constructor(
    private photosService: PhotosService,
    private router: Router,
    public generalService: GeneralService
  ) {}

  ngAfterViewInit(): void {}

  onDelete(): void {
    this.photosService.deletePhoto(this.id).subscribe({
      next: () => {
        this.generalService.showModal = false;
        this.router.navigate(['/photos']);
      },
      error: (err) => {
        console.error('Error deleting photo:', err);
      },
    });
  }
}
