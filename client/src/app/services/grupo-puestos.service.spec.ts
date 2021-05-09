import { TestBed } from '@angular/core/testing';

import { GrupoPuestosService } from './grupo-puestos.service';

describe('GrupoPuestosService', () => {
  let service: GrupoPuestosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoPuestosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
