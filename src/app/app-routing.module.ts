import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/components/photos-component/photos.component';
import { PhotosDetailComponent } from './photos/components/photos-detail/photos-detail.component';
import { FormComponent } from './shared/components/form/form.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
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
