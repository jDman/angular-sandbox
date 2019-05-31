import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <div>
      I'm loaded lazily!
    </div>
  `
})
export class LazyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
