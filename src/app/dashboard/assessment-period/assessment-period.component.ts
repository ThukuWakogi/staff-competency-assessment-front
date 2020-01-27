import { Component, OnInit } from '@angular/core';
import { AssessmentPeriodService } from 'src/app/services/assessment-period/assessment-period.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-assessment-period',
  templateUrl: './assessment-period.component.html',
  styleUrls: ['./assessment-period.component.scss']
})
export class AssessmentPeriodComponent implements OnInit {
  assessmentPeriods: any

  constructor(private assessmentPeriodService: AssessmentPeriodService) { }

  ngOnInit() {
    this.getAssessmentPeriods()
  }

  getAssessmentPeriods() {
    this
      .assessmentPeriodService
      .getAssessementPeriods()
      .pipe(first())
      .subscribe((assessmentPeriods: any) => {
        this.assessmentPeriods = assessmentPeriods
        console.log({assessmentPeriods})
      })
  }
}
