import { TestBed, inject } from '@angular/core/testing';

import { GetAssetsService } from './get-assets.service';

describe('GetAssetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAssetsService]
    });
  });

  it('should be created', inject([GetAssetsService], (service: GetAssetsService) => {
    expect(service).toBeTruthy();
  }));
});
