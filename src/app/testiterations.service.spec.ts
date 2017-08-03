import { TestBed, inject } from '@angular/core/testing';

import { TestiterationsService } from './testiterations.service';

describe('TestiterationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestiterationsService]
    });
  });

  it('should be created', inject([TestiterationsService], (service: TestiterationsService) => {
    expect(service).toBeTruthy();
  }));
});
