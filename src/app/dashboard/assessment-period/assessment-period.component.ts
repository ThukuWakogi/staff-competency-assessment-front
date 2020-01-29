import { Component, OnInit } from '@angular/core';
import { AssessmentPeriodService } from 'src/app/services/assessment-period/assessment-period.service';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { AssessmentPeriodFormDialogComponent } from 'src/app/component/assessment-period-form-dialog/assessment-period-form-dialog.component';
import { AssessmentsService } from 'src/app/services/assessments/assessments.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-assessment-period',
  templateUrl: './assessment-period.component.html',
  styleUrls: ['./assessment-period.component.scss']
})
export class AssessmentPeriodComponent implements OnInit {
  assessmentPeriods: any;
  assessmentStatus: any;
  isAssessmentPeriodUpdating = false

  constructor(
    private assessmentPeriodService: AssessmentPeriodService,
    public dialog: MatDialog,
    private assessmentsService: AssessmentsService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.assessmentPeriodService.getAssessementPeriods()
    this.getAssessmentPeriods()
    this.getAssessmentPendingStatus()
  }

  getAssessmentPeriods() {
    console.log('lol')
    this
      .assessmentPeriodService
      .assessmentPeriods
      .subscribe((assessmentPeriods: any) => {
        this.assessmentPeriods = assessmentPeriods
      })
  }

  getAssessmentPendingStatus() {
    this.assessmentsService.PendingAssessmentStatus.subscribe(
      assessmentStatus => {
        if (assessmentStatus) {
          console.log({ assessmentStatus });
          this.assessmentStatus = assessmentStatus;
        }
      }
    );
  }

  isAssessmentOngoing(id: number) {
    if (!this.assessmentStatus.is_assessment_period_ongoing) return false

    return this.assessmentStatus
      ? id === this.assessmentStatus.ongoing_assessment_period.id
        ? true
        : false
      : false;
  }

  openDialog() {
    this.dialog.open(AssessmentPeriodFormDialogComponent);
  }

  onChange(assessmentPeriod: any) {
    console.log({assessmentPeriod})
    this.isAssessmentPeriodUpdating = true
    this
      .assessmentPeriodService
      .updateAssessmentPeriod(assessmentPeriod.id, { is_marked_as_ended: !assessmentPeriod.is_marked_as_ended })
      .subscribe(
        (updatedAssessmentPeriod: any) => {
          this.assessmentPeriodService.getAssessementPeriods()
          this.assessmentsService.isAssessmentPending(this.authenticationService.currentUserValue.id)
          this.isAssessmentPeriodUpdating = false
        },
        (error: any) => {
          console.log(error)
          this.isAssessmentPeriodUpdating = true
        }
      )
  }

  isAssessmentPeriodInRange(startDate, endDate) {
    return new Date() > new Date(startDate) && new Date() < new Date(endDate)
  }
}
