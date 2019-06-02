import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <app-tree></app-tree>
  `
})
export class LazyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
