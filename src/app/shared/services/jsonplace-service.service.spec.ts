import { TestBed } from '@angular/core/testing';

import { JsonplaceServiceService } from './jsonplace-service.service';

describe('JsonplaceServiceService', () => {
  let service: JsonplaceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonplaceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
