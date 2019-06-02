import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { MaterialModule } from '../material/material.module';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [LazyComponent, TreeComponent],
  imports: [CommonModule, LazyRoutingModule, MaterialModule]
})
export class LazyModule {}
