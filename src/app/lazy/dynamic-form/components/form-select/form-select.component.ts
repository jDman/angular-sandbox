import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../interfaces/field.interface';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent {
  config: Field;
  group: FormGroup;
}
