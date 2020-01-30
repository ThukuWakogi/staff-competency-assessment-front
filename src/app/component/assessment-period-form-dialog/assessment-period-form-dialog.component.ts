import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssessmentsService } from 'src/app/services/assessments/assessments.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssessmentPeriodService } from 'src/app/services/assessment-period/assessment-period.service';

@Component({
  selector: 'app-assessment-period-form-dialog',
  templateUrl: './assessment-period-form-dialog.component.html',
  styleUrls: ['./assessment-period-form-dialog.component.scss']
})
export class AssessmentPeriodFormDialogComponent implements OnInit {
  pickerStartDate: Date = new Date()
  isAssessmentPeriodOngoing = false
  assessmentStatus: any
  assessmentPeriodForm: FormGroup
  errorMessage: string
  customErrorExists = false

  constructor(
    public dialogRef: MatDialogRef<AssessmentPeriodFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private assessmentsService: AssessmentsService,
    private authenticationService: AuthenticationService,
    private assessmentPeriodService: AssessmentPeriodService
  ) { }

  ngOnInit() {
    this.assessmentPeriodForm = new FormGroup({
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required])
    })
    this
      .assessmentsService
      .PendingAssessmentStatus
      .subscribe(assessmentStatus => {
        if (assessmentStatus) {
          console.log({assessmentStatus})
          this.isAssessmentPeriodOngoing = assessmentStatus.is_assessment_period_ongoing
          this.assessmentStatus = assessmentStatus
        }
      })
    console.log(this.assessmentPeriodForm)
  }

  save() {
    if (this.assessmentPeriodForm.invalid) return

    if (!this.isAssessmentPeriodInRange(this.assessmentPeriodForm.value)) {
      this.customErrorExists = true
      this.errorMessage = 'Ensure dates are within valid range'
      return
    } else {
      this.customErrorExists = false
      this.errorMessage = ''
    }

    this.assessmentPeriodForm.value.initiating_user = this.authenticationService.currentUserValue.id

    console.log(this.assessmentPeriodForm.value)

    this
      .assessmentPeriodService
      .insertAssessmentPeriod(this.assessmentPeriodForm.value)
      .subscribe(
        (data: any) => {
          this.assessmentPeriodService.getAssessementPeriods()
          this.assessmentsService.isAssessmentPending(this.authenticationService.currentUserValue.id)
          this.dialogRef.close()
        },
        (error: any) => {
          console.log({error})
        }
      )
  }

  getStartDateError() {
    return this.assessmentPeriodForm.controls.start_date.hasError('required')
      ? 'Start date is required'
      : ''
  }

  getEndDateError() {
    return this.assessmentPeriodForm.controls.end_date.hasError('required')
      ? 'End date is required'
      : ''
  }

  isAssessmentPeriodInRange(dates: any) {
    return new Date(dates.start_date) > new Date() && new Date(dates.start_date) < new Date(dates.end_date)
  }
}
