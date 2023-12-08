import { Injectable } from '@angular/core';
import { IPhotos } from '../interfaces/photos';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  private apiUrl: string =
    'https://jsonplaceholder.typicode.com/albums/1/photos';

  getProducts(): Observable<IPhotos[]> {
    return this.http
      .get<IPhotos[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getProductByID(id: number): Observable<IPhotos> {
    return this.http
      .get<IPhotos>(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .pipe(catchError(this.handleError));
  }

  deletePhoto(photoId: number): Observable<void> {
    const deleteUrl = `https://jsonplaceholder.typicode.com/photos/${photoId}`;
    return this.http.delete<void>(deleteUrl).pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = `An error occured:  ${err.error.message}`;
    } else {
      errMessage = `Server returned code ${err.status}, error message is ${err.error.message}`;
    }
    console.log(errMessage);
    return throwError(() => errMessage);
  }
}
