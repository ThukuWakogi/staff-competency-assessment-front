import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer', { static: false }) drawer: any
  private currentUser: any

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.onUserChange()
    this.authenticationService.getLoggedInUser()
  }

  onUserChange() {
    this
      .authenticationService
      .currentUser
      .subscribe(user => {
        this.currentUser = user

        if (this.authenticationService.currentUserValue == null) {
          this.router.navigate([''])
          return
        }

        if (this.authenticationService.currentUserValue.is_superuser) {
          this.router.navigate(['dashboard/HR'])
          return
        }

        if (this.authenticationService.currentUserValue.is_manager) {
          this.router.navigate(['dashboard'])
          return
        }

        this.router.navigate(['profile'])
      })
  }
}
