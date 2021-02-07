import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedInName = '';
  loggedInUrl = '';
  constructor(private dataService: DataService) {
    let res = this.dataService.getCredentials();
    this.loggedInName = res.loggedInName;
    this.loggedInUrl = res.loggedInUrl;
  }

  ngDoCheck() {
    console.log('HIII I am in');
    let res = this.dataService.getCredentials();
    this.loggedInName = res.loggedInName;
    this.loggedInUrl = res.loggedInUrl;
  }

  ngOnInit(): void {}

  logout() {
    console.log('User logout');
    this.dataService.logout();
  }
}
