import { TestBed, inject } from '@angular/core/testing';

import { InquiryServiceService } from './inquiry-service.service';

describe('InquiryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InquiryServiceService]
    });
  });

  it('should be created', inject([InquiryServiceService], (service: InquiryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
