import { TestBed } from '@angular/core/testing';

import { PlanificacionService } from './planificacion.service';

describe('PlanificacionnService', () => {
  let service: PlanificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
