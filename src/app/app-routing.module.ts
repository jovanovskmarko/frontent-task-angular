import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photos/components/photo-component/photo.component';
import { PhotosDetailComponent } from './photos/components/photos-detail/photo-detail.component';
import { FormComponent } from './shared/components/form/form.component';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: 'errorPage', component: ErrorComponent },
  { path: 'photos', component: PhotoComponent },
  { path: 'photos/upload', component: FormComponent },
  { path: 'photos/:id', component: PhotosDetailComponent },
  { path: 'photos/:id/edit', component: FormComponent },
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: '**', redirectTo: 'photos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
