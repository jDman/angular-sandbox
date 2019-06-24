import {
  ComponentFactoryResolver,
  Directive,
  Input,
  ViewContainerRef,
  OnInit,
  ComponentRef,
  OnChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FieldConfig } from '../../interfaces/field-config.interface';
import { Field } from '../../interfaces/field.interface';
import { FormCustomComponentComponent } from '../form-custom-component/form-custom-component.component';

const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  custom: FormCustomComponentComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit, OnChanges {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');

      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }

    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);

    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }
}
