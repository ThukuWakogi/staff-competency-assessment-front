import { TestBed } from '@angular/core/testing';

import { AssessmentPeriodService } from './assessment-period.service';

describe('AssessmentPeriodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssessmentPeriodService = TestBed.get(AssessmentPeriodService);
    expect(service).toBeTruthy();
  });
});
