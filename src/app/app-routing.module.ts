import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/components/photos-component/photos.component';
import { PhotosDetailComponent } from './photos/components/photos-detail/photos-detail.component';
import { EditComponent } from './shared/components/form/edit.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotosDetailComponent },
  { path: 'photos/:id/edit', component: EditComponent },
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: '**', redirectTo: 'photos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
