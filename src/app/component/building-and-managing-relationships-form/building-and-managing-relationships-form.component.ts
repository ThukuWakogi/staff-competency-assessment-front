import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-building-and-managing-relationships-form',
  templateUrl: './building-and-managing-relationships-form.component.html',
  styleUrls: ['./building-and-managing-relationships-form.component.scss']
})
export class BuildingAndManagingRelationshipsFormComponent implements OnInit {
  @Input() assessmentForm: FormGroup

  constructor() { }

  ngOnInit() {
  }

}
