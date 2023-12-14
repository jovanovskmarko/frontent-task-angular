import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatCardModule, MatDialogModule],
  exports: [MatButtonModule, MatSidenavModule, MatCardModule, MatDialogModule],
})
export class MaterialModule {}
