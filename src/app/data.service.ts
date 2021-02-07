import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  loggedInName = '';
  loggedInUrl = '';
  dashboardArr = [
    {
      schoolName: 'Kendriya Vidyalaya',
      board: 'CBSE',
      medium: 'Kannada',
      class: '10',
    },
    {
      schoolName: 'Kendriya Vidyalaya',
      board: 'CBSE',
      medium: 'tamil',
      class: '11',
    },
    {
      schoolName: 'Kendriya Vidyalaya',
      board: 'CBSE',
      medium: 'English',
      class: '12',
    },
  ];

  constructor() {}

  logout() {
    sessionStorage.removeItem('name');
  }

  getCredentials() {
    this.loggedInName = sessionStorage.getItem('name');
    if (sessionStorage.getItem('url'))
      this.loggedInUrl = sessionStorage.getItem('url');
    else
      this.loggedInUrl =
        'https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png';

    let res = {
      loggedInName: this.loggedInName,
      loggedInUrl: this.loggedInUrl,
    };
    return res;
  }
}
