import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIndiceComponent } from './lista-indice.component';

describe('ListaIndiceComponent', () => {
  let component: ListaIndiceComponent;
  let fixture: ComponentFixture<ListaIndiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIndiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIndiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
