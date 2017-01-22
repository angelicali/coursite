import {Component, OnInit, Input} from '@angular/core';
import {CourseService} from "../course.service";

@Component({
  selector: 'app-btns',
  templateUrl: './btns.component.html',
  styleUrls: ['./btns.component.css']
})
export class BtnsComponent implements OnInit {
  @Input() course;
  @Input() uid;
  btns: any[];

  //TODO: output updated btns from settings


  constructor( private _courseService: CourseService) { }

  ngOnInit() {
    this.getBtns();
  }

  getBtns() {

    this._courseService.getUserBtns(this.course, this.uid)
    .subscribe(
        data => {
          this.btns = data;
          console.log(this.btns);
        },
        error => alert(error),
        () => console.log("finished getting course info"))

  }

}
