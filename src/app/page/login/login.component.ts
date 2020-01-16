import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

firstname: string;
email: string;
password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.firstname == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }
  

}
