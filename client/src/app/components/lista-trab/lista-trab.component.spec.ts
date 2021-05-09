import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabComponent } from './lista-trab.component';

describe('ListaTrabComponent', () => {
  let component: ListaTrabComponent;
  let fixture: ComponentFixture<ListaTrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTrabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
