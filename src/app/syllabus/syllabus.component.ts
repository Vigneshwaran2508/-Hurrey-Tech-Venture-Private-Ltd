import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
} )
export class SyllabusComponent implements OnInit {

  constructor () { }

  ngOnInit (): void {
  }
  getYears () {
    const year = 1996;
    let till = new Date().getFullYear();
    let options = "";
    for ( let y = year; y <= till; y++ ) {
      options += `<option value=${y-y+1}>  ${y} - ${(y+1)} </option>`;
    }
    document.getElementById( "AcademicYears" ).innerHTML = options;
  }
  addTopics(){
    console.log("addTopics");
    let container =`<div class="container">
    <h3>Topic</h3>
    <div>
        <input id="topicDescription1" placeholder="Description">
        <input id="topicAllottedTime1" placeholder="Allotted time">
    </div>
    <div id="subTopics">
        <h3>Sub-Topic</h3>
        <input id="counting1" placeholder="counting" >
        <input id="sub-topicDescription1" placeholder="Description">
        <span id="removeSubTopics1">-</span>
    </div>
    <h3 id="addSubTopics" (click)="addSubTopics()" >+</h3>
</div>`
return container;
  }
  addSubTopics(){

  }
}
