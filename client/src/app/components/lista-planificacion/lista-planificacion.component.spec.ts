import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanificacionComponent } from './lista-planificacion.component';

describe('ListaPlanificacionComponent', () => {
  let component: ListaPlanificacionComponent;
  let fixture: ComponentFixture<ListaPlanificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPlanificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
