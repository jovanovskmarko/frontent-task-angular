import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/components/photos-component/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotosDetailComponent } from './photos/components/photos-detail/photos-detail.component';
import { FormComponent } from './shared/components/form/form.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavMenuComponent } from './photos/components/nav-menu/nav-menu.component';

@NgModule({
  declarations: [AppComponent, PhotosDetailComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    NavMenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
