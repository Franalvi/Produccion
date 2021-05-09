import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrosComponent } from './form-registros.component';

describe('FormRegistrosComponent', () => {
  let component: FormRegistrosComponent;
  let fixture: ComponentFixture<FormRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
