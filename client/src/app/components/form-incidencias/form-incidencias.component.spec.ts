import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIncidenciasComponent } from './form-incidencias.component';

describe('FormIncidenciasComponent', () => {
  let component: FormIncidenciasComponent;
  let fixture: ComponentFixture<FormIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIncidenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
