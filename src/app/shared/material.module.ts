import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  exports: [MatButtonModule, MatSidenavModule, MatCardModule, MatButtonModule],
})
export class MaterialModule {}
