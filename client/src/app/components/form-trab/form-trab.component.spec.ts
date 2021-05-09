import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrabComponent } from './form-trab.component';

describe('FormTrabComponent', () => {
  let component: FormTrabComponent;
  let fixture: ComponentFixture<FormTrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTrabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
