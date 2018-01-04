import { TestBed, inject } from '@angular/core/testing';

import { BuyServiceService } from './buy-service.service';

describe('BuyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyServiceService]
    });
  });

  it('should be created', inject([BuyServiceService], (service: BuyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
