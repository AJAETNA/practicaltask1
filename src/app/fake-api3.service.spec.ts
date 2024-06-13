import { TestBed } from '@angular/core/testing';

import { FakeApi3Service } from './fake-api3.service';

describe('FakeApi3Service', () => {
  let service: FakeApi3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeApi3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
