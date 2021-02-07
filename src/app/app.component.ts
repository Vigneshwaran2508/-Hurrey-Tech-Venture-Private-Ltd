import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-dream-app';
  isLoggedIn = false;
  loggedName = null;

  ngDoCheck() {
    if (sessionStorage.getItem('name')) {
      console.log('YAYY USER LOGEED IN');
      this.isLoggedIn = true;
      this.loggedName = sessionStorage.getItem('name');
    } else {
      console.log('OOPS USER NOT LOGEED IN');
      this.isLoggedIn = false;
      this.loggedName = null;
    }
  }
}
