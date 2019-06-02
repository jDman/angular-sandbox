import { NgModule } from '@angular/core';

import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatTreeModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatTreeModule
  ],
  exports: [MatCheckboxModule, MatFormFieldModule, MatIconModule, MatTreeModule]
})
export class MaterialModule {}
