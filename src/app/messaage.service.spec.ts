import { TestBed, inject } from '@angular/core/testing';

import { MessaageService } from './messaage.service';

describe('MessaageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessaageService]
    });
  });

  it('should be created', inject([MessaageService], (service: MessaageService) => {
    expect(service).toBeTruthy();
  }));
});
