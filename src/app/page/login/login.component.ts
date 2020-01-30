import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  returnUrl: string
  showPassword = false
  currentUser: any
  routeBasedOnUser: string

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this
      .authenticationService
      .currentUser
      .subscribe(user => {
        this.currentUser = user
        // if (this.authenticationService.currentUserValue != null) this.router.navigate(['dashboard'])
      })
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || this.routeBasedOnUser
  }

  getUsernameErrorMessage() {
    return this.loginForm.controls.username.hasError('required')
      ? 'email is required'
      : this.loginForm.controls.username.hasError('email')
        ? 'Not a valid email'
        : ''
  }

  getPasswordErrorMessage() {
    return this.loginForm.controls.password.hasError('required')
      ? 'password is required'
      : ''
  }

  onSubmit() {
    console.log(this.loginForm.value)

    if (this.loginForm.invalid) return

    this
      .authenticationService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.setRouteBasedOnUser()
          this.router.navigate([this.returnUrl])
        },
        error => {console.log({error})}
      )
  }

  setRouteBasedOnUser() {
    if (this.authenticationService.currentUserValue == null) {
      this.routeBasedOnUser = ''
      return
    }

    if (this.authenticationService.currentUserValue.is_superuser) {
      this.routeBasedOnUser = 'dashboard/HR'
      return
    }

    if (this.authenticationService.currentUserValue.is_manager) {
      this.routeBasedOnUser = 'dashboard'
      return
    }

    this.routeBasedOnUser = 'profile'
  }
}
