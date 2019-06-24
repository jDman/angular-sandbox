import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { MaterialModule } from '../material/material.module';
import { TreeComponent } from './tree/tree.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormInputComponent } from './dynamic-form/components/form-input/form-input.component';
import { FormSelectComponent } from './dynamic-form/components/form-select/form-select.component';
import { FormButtonComponent } from './dynamic-form/components/form-button/form-button.component';
import { DynamicFieldDirective } from './dynamic-form/components/dynamic-field/dynamic-field.directive';
import { FormCustomComponentComponent } from './dynamic-form/components/form-custom-component/form-custom-component.component';

@NgModule({
  declarations: [
    LazyComponent,
    TreeComponent,
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    DynamicFieldDirective,
    FormCustomComponentComponent
  ],
  imports: [CommonModule, LazyRoutingModule, MaterialModule, SharedModule],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCustomComponentComponent
  ]
})
export class LazyModule {}
