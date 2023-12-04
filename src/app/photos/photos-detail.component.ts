import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrl: './photos-detail.component.css',
})
export class PhotosDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  pageTitle: string = 'Photo ';
  imgUrl: string = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pageTitle += id + ' Detail';
  }
}
