import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomComponentComponent } from './form-custom-component.component';

describe('FormCustomComponentComponent', () => {
  let component: FormCustomComponentComponent;
  let fixture: ComponentFixture<FormCustomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCustomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
