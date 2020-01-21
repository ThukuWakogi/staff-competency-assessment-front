import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material';

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
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'dashboard'
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
        data => {this.router.navigate([this.returnUrl])},
        error => {console.log({error})}
      )
  }
}
