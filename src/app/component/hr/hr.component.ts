import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AssessmentPeriodFormDialogComponent } from '../assessment-period-form-dialog/assessment-period-form-dialog.component';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HRComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialog = this.dialog.open(
      AssessmentPeriodFormDialogComponent,
      { data:
        { assessment: '21' }
      }
    )
  }
}
