import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExperienciaComponent } from './form-experiencia.component';

describe('FormExperienciaComponent', () => {
  let component: FormExperienciaComponent;
  let fixture: ComponentFixture<FormExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
