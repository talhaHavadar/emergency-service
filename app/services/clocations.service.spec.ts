/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClocationsService } from './clocations.service';

describe('Service: Clocations', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClocationsService]
    });
  });

  it('should ...', inject([ClocationsService], (service: ClocationsService) => {
    expect(service).toBeTruthy();
  }));
});