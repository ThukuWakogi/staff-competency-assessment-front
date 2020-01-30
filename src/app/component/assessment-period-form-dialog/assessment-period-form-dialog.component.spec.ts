import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPeriodFormDialogComponent } from './assessment-period-form-dialog.component';

describe('AssessmentPeriodFormDialogComponent', () => {
  let component: AssessmentPeriodFormDialogComponent;
  let fixture: ComponentFixture<AssessmentPeriodFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentPeriodFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPeriodFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
