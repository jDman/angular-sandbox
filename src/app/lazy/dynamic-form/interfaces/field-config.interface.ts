import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  options?: string[];
  placeholder?: string;
  validation?: ValidatorFn[];
  value?: any;
}
