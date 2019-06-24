import { Component, OnInit, forwardRef } from '@angular/core';
import { Field } from '../../interfaces/field.interface';
import {
  FormGroup,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-form-custom-component',
  templateUrl: './form-custom-component.component.html',
  styleUrls: ['./form-custom-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormCustomComponentComponent),
      multi: true
    }
  ]
})
export class FormCustomComponentComponent
  implements OnInit, ControlValueAccessor {
  config: Field;
  group: FormGroup;
  value: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.group.addControl('nickName', this.fb.control({}));
    this.group.addControl('contact', this.fb.control({}));
  }

  private _onChange = (_: any) => {};
  private _onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
}
