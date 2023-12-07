import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotosDetailComponent } from './photos/photos-detail.component';
import { EditComponent } from './shared/edit.component';
import { DialogComponent } from './shared/dialog/dialog.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotosDetailComponent },
  { path: 'photos/:id/edit', component: EditComponent },
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: '**', redirectTo: 'photos', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotosDetailComponent,
    EditComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
