import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../interfaces/field.interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  config: Field;
  group: FormGroup;
}
