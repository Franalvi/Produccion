import { TestBed } from '@angular/core/testing';

import { IndiceIncidenciasService } from './indice-incidencias.service';

describe('IndiceIncidenciasService', () => {
  let service: IndiceIncidenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiceIncidenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
