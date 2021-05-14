import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsetComponent } from './pset.component';

describe('PsetComponent', () => {
  let component: PsetComponent;
  let fixture: ComponentFixture<PsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
