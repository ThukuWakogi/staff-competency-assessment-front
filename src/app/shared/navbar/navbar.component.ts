import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  router: any;
  constructor() {}

  ngOnInit() {
  }

  public person() {
    this.router.navigate(['./dashboard/profile']);
  }

  menuClick() {
   // document.getElementById('main-panel').style.marginRight = '260px';
  }
}
