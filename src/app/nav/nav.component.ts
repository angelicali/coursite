import {Component, AfterContentChecked, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterContentChecked {
  @Input()
  courses: string[];
  active: string = 'HOME';


  constructor() { }

  // TODO: not the optimal way to do this (try directive?)
  ngAfterContentChecked () {
    console.log("checking");
    if(this.active==='HOME') {
      if (document.getElementById("HOME-btns") != null && document.getElementById("HOME-tab") != null) {
        document.getElementById("HOME-btns").className += " active";
        document.getElementById("HOME-tab").className += " active";
      }
    }
  }


  clickOnTab(index: number){
    const oldActiveTab = this.active + "-tab";
    const oldActiveBtns = this.active + "-btns";
    document.getElementById(oldActiveTab).className = ""; // TODO: reassign the value
    document.getElementById(oldActiveBtns).className = "main-box";

    const course = this.courses[index];
    this.active = course;

    const newActiveTab = course + "-tab";
    const newActiveBtns = course + "-btns";

    document.getElementById(newActiveTab).className += " active";
    document.getElementById(newActiveBtns).className += " active";

  }

}
