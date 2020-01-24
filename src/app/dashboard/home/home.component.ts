import { Component, OnInit } from '@angular/core';
import { ManagersService } from 'src/app/services/managers/managers.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  managersAndStaff: any

  constructor(private managersService: ManagersService, private router: Router) { }

  ngOnInit() {
    this.getManagersAndStaff()
  }

  getManagersAndStaff() {
    this
      .managersService
      .getManagersAndStaff()
      .pipe(first())
      .subscribe((incomingManagersAndStaff: any) => {
        this.managersAndStaff = incomingManagersAndStaff
      })
  }
}
