import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  dashboardArr = [
    {
      schoolName: 'Kendriya Vidyalaya',
      board: 'CBSE',
      medium: 'English',
      class: '10',
    },
    {
      schoolName: 'Kendriya Vidyalaya',
      board: 'CBSE',
      medium: 'English',
      class: '11',
    },
    {
      schoolName: 'Kendriya Vidyalaya',
      board: 'CBSE',
      medium: 'English',
      class: '12',
    },
  ];
  ngOnInit(): void {}
}
