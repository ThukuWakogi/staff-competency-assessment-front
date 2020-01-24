import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-figurecard',
  templateUrl: './figurecard.component.html',
  styleUrls: ['./figurecard.component.css']
})
export class FigurecardComponent implements OnInit {
  @Input() manager: any

  constructor() { }

  ngOnInit() {
  }

  getDisplayName = (user: any) => user.first_name === '' && user.last_name === ''
    ? user.email
    : `${user.first_name} ${user.last_name}`.trim()
}
