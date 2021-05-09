import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPuestosComponent } from './form-puestos.component';

describe('FormPuestosComponent', () => {
  let component: FormPuestosComponent;
  let fixture: ComponentFixture<FormPuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPuestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
