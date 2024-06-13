import { TestBed } from '@angular/core/testing';

import { FakeApi2Service } from './fake-api2.service';

describe('FakeApi2Service', () => {
  let service: FakeApi2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeApi2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
