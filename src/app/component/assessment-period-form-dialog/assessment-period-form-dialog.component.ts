import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-assessment-period-form-dialog',
  templateUrl: './assessment-period-form-dialog.component.html',
  styleUrls: ['./assessment-period-form-dialog.component.scss']
})
export class AssessmentPeriodFormDialogComponent implements OnInit {
  pickerStartDate: Date = new Date()

  constructor(
    public dialogRef: MatDialogRef<AssessmentPeriodFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  save() {
    console.log('save clicked')
    this.dialogRef.close()
  }
}
