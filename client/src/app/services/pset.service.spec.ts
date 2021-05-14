import { TestBed } from '@angular/core/testing';

import { PsetService } from './pset.service';

describe('PsetService', () => {
  let service: PsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
