import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssessmentPeriodFormDialogComponent } from '../assessment-period-form-dialog/assessment-period-form-dialog.component';
import { AssessmentPeriodService } from 'src/app/services/assessment-period/assessment-period.service';
import { first } from 'rxjs/operators';
import format from 'date-fns/format'

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HRComponent implements OnInit {
  assessmentPeriodSummary: any

  constructor(public dialog: MatDialog, private assessmentPeriodService: AssessmentPeriodService) { }

  ngOnInit() {
    this.getAssessmentPeriodSummary()
  }

  openDialog() {const dialog = this.dialog.open(AssessmentPeriodFormDialogComponent)}

  private getAssessmentPeriodSummary() {
    this
      .assessmentPeriodService
      .getAssessmentPeriodSummary()
      .pipe(first())
      .subscribe((assessmentPeriodSummary: any) => {
        this.assessmentPeriodSummary = assessmentPeriodSummary
        console.log({assessmentPeriodSummary})
      })
  }

  getLastAssessmentPeriodEndingDate() {
    return this.assessmentPeriodSummary.previous_assessment_period.has_ended
      ? `Ended on ${
        format(new Date(this.assessmentPeriodSummary.previous_assessment_period.end_date), 'do MMMM, yyyy')
      }`
      : `Ending on ${
        format(new Date(this.assessmentPeriodSummary.previous_assessment_period.end_date), 'do MMMM, yyyy')
      }`
  }
}
