import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private myRouter: Router) {}
  userName = '';
  userPassword = '';
  errorMessage;

  ngOnInit(): void {}
  login() {
    console.log('USER LOGIN', this.userPassword, this.userName);
    if (this.userName == '' || this.userPassword == '')
      this.errorMessage = 'UserName and Password are required to login!';
    else if (this.userName.length < 4 || this.userPassword.length < 4) {
      this.errorMessage =
        'UserName and Password are required to be minimum 4 letters length!';
    } else {
      this.errorMessage = '';
      sessionStorage.setItem('name', this.userName);
      this.myRouter.navigate(['/dashboard']);
    }
  }
}
