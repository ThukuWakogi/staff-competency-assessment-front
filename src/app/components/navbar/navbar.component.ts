import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() drawer: any

  constructor() { }

  ngOnInit() {
  }

}
