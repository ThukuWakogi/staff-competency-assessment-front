import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-critical-thinking-form',
  templateUrl: './critical-thinking-form.component.html',
  styleUrls: ['./critical-thinking-form.component.scss']
})
export class CriticalThinkingFormComponent implements OnInit {
  @Input() assessmentForm: FormGroup

  constructor() { }

  ngOnInit() {
  }

}
