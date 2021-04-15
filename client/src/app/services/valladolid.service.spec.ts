import { TestBed } from '@angular/core/testing';

import { ValladolidService } from './valladolid.service';

describe('ValladolidService', () => {
  let service: ValladolidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValladolidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
