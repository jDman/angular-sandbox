import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <div>
      <app-tree></app-tree>
      <app-dynamic-form
        [config]="dynamicFormConfig"
        (submitted)="formSubmitted($event)"
      ></app-dynamic-form>
    </div>
  `
})
export class LazyComponent {
  dynamicFormConfig = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      label: 'Custom',
      name: 'custom',
      type: 'custom'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  formSubmitted(value) {
    console.log(value);
  }
}
