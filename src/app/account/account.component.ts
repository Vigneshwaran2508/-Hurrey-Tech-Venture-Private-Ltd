import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  loggedInPerson = {
    loggedInUrl: '',
    loggedInName: '',
    phno: '',
    userName: '',
    email: '',
  };

  errorMsg = {
    nameErr: '',
    imageErr: '',
    mobileErr: '',
    userNameErr: '',
    emailErr: '',
  };

  showEditDiv = false;

  constructor(private dataService: DataService) {
    this.loggedInPerson.loggedInName = this.dataService.loggedInName;
    this.loggedInPerson.loggedInUrl = this.dataService.loggedInUrl;

    this.loggedInPerson.phno = '9345678677';
    this.loggedInPerson.email = this.loggedInPerson.loggedInName + '@gmail.com';
    this.loggedInPerson.userName = this.loggedInPerson.loggedInName.toUpperCase();
  }

  ngOnInit(): void {}

  openEditDiv() {
    this.showEditDiv = true;
  }

  editProfile() {
    let namePat = /^[a-z A-Z]+$/g;
    let userNamePat = /^[a-zA-Z .-_0-9]+$/;
    let phPat = /^[+ 0-9]+$/;
    let errorflag = false;
    if (namePat.test(this.loggedInPerson.loggedInName)) {
      this.errorMsg.nameErr = '';
    } else {
      this.errorMsg.nameErr = 'Name should contain only letters';
      errorflag = true;
    }

    if (
      userNamePat.test(this.loggedInPerson.userName) &&
      this.loggedInPerson.userName.length >= 4 &&
      this.loggedInPerson.userName.length <= 30
    ) {
      this.errorMsg.userNameErr = '';
    } else {
      this.errorMsg.userNameErr =
        'User Name should contain only A-Z 0-9 ._- characters. Length should be 4 to 30';
      errorflag = true;
    }

    if (phPat.test(this.loggedInPerson.phno)) {
      this.errorMsg.mobileErr = '';
    } else {
      this.errorMsg.userNameErr =
        'Mobile no. should contain only 0-9 characters';
      errorflag = true;
    }

    if (errorflag) this.showEditDiv = true;
    else {
      sessionStorage.setItem('name', this.loggedInPerson.loggedInName);
      sessionStorage.setItem('url', this.loggedInPerson.loggedInUrl);
      this.showEditDiv = false;
    }
  }
}
