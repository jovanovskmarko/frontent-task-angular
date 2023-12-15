import { Injectable } from '@angular/core';
import { IPhoto } from '../interfaces/photo';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  public errMessage: string = 'Oops something went wrong';
  constructor(private http: HttpClient, private router: Router) {}

  loadPhotos(pageIndex: number): Observable<IPhoto[]> {
    return this.http
      .get<IPhoto[]>(
        `https://jsonplaceholder.typicode.com/albums/${pageIndex}/photos`
      )
      .pipe(catchError(this.handleError));
  }

  getPhotoByID(id: number): Observable<IPhoto> {
    return this.http
      .get<IPhoto>(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .pipe(catchError(this.handleError));
  }

  deletePhoto(photoId: number): Observable<void> {
    const deleteUrl = `https://jsonplaceholder.typicode.com/photos/${photoId}`;
    return this.http.delete<void>(deleteUrl).pipe(catchError(this.handleError));
  }

  uploadPhoto(photo: IPhoto): Observable<IPhoto> {
    return this.http
      .post<IPhoto>(
        'https://jsonplaceholder.typicode.com/albums/1/photos',
        photo
      )
      .pipe(catchError(this.handleError));
  }

  editPhoto(
    photoId: number,
    updatedPhoto: Partial<IPhoto>
  ): Observable<IPhoto> {
    const editUrl = `https://jsonplaceholder.typicode.com/photos/${photoId}`;

    return this.http
      .patch<IPhoto>(editUrl, updatedPhoto)
      .pipe(catchError(this.handleError));
  }

  handleError = (err: HttpErrorResponse) => {
    if (err.error instanceof ErrorEvent) {
      this.errMessage = `An error occured:  ${err.message}`;
    } else {
      this.errMessage = `Error: ${err.status}, ${err.message}`;
    }
    this.router.navigate(['/errorPage']);
    return throwError(() => this.errMessage);
  };
}
