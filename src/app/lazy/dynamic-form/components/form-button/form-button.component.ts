import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../interfaces/field.interface';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent {
  config: Field;
  group: FormGroup;
}
