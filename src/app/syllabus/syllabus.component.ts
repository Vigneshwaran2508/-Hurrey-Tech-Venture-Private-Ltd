import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css'],
})
export class SyllabusComponent implements OnInit {
  constructor() {}
  showWindow = false;
  inputTopic = '';
  topicsObj = {
    number: {},
    addition: {},
    subtraction: {},
  };
  topicsKeys = Object.keys(this.topicsObj);
  ngOnInit(): void {}
  openWindow() {
    this.showWindow = true;
  }

  addTopic() {
    this.topicsObj[this.inputTopic] = {};
    this.topicsKeys = Object.keys(this.topicsObj);
    this.showWindow = false;
  }
}
