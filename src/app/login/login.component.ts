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
  userName;

  ngOnInit(): void {}
  login() {
    console.log('USER LOGIN');
    sessionStorage.setItem('name', this.userName);
    this.myRouter.navigate(['/dashboard']);
  }
}
