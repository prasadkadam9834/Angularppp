import { TestBed } from '@angular/core/testing';

import { HelloeveryService } from './helloevery.service';

describe('HelloeveryService', () => {
  let service: HelloeveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloeveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
