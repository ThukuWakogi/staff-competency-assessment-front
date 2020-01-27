import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPeriodComponent } from './assessment-period.component';

describe('AssessmentPeriodComponent', () => {
  let component: AssessmentPeriodComponent;
  let fixture: ComponentFixture<AssessmentPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
