import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  currentUser: any

  constructor(private authenticationService: AuthenticationService) {
    this
      .authenticationService
      .currentUser
      .subscribe(user => this.currentUser = user)
  }

  ngOnInit() {
    this.firstName = 'Alvin';
    this.lastName = 'Karanja';
  }

}
