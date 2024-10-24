import { TestBed } from '@angular/core/testing';

import { MtService } from './mt.service';

describe('MtService', () => {
  let service: MtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
