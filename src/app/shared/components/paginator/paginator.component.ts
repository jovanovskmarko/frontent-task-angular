import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
  standalone: true,
  imports: [MatPaginatorModule],
})
export class PaginatorComponent {
  pageEvent: PageEvent | undefined;

  constructor(private router: Router) {}

  changePage(e: PageEvent): void {
    this.router.navigate(['/photos'], {
      queryParams: { pageIndex: e.pageIndex + 1 },
    });
  }
}
