import { Injectable } from '@angular/core';
import { IPhotos } from './photos';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  private apiUrl: string =
    'https://jsonplaceholder.typicode.com/albums/1/photos';

  getProducts(): Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>(this.apiUrl).pipe(
      tap((data) => console.log('All ', JSON.stringify(data))),
      catchError(this.handleError)
    );
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
