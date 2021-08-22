import { TestBed } from '@angular/core/testing';

import { LightStatusService } from './light-status.service';

describe('LightStatusService', () => {
  let service: LightStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
