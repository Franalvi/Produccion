import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExperienciaComponent } from './lista-experiencia.component';

describe('ListaExperienciaComponent', () => {
  let component: ListaExperienciaComponent;
  let fixture: ComponentFixture<ListaExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
