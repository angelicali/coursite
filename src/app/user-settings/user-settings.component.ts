import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  @Input()
  courses: string[];
  @Input()
  userid: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  addCourse(){
    this.courses.push("");
  }

  closeUserSettings(){
    var modal = document.getElementById("userSettings");
    modal.style.display = "none";
  }

  saveProfileChanges(){
    var new_courses, i, cid;
    new_courses = new Array();
    for(i=0; i< this.courses.length; i++){
      cid = document.getElementById("course"+i);
      cid = cid.value;
      if(!(cid=="")){
        new_courses.push(cid);
      }
    }
    console.log(new_courses);
    // var inputCourses = (<HTMLInputElement>document.getElementById("inputCourses")).value;
    this._userService.updateCourses(this.userid,new_courses)
      .subscribe(
        () => console.log("saving courses")
      );
    location.reload();  //TODO: remove reload after sync variables cross components
  }

  deleteCourse(i: number){
    this.courses.splice(i,1);
  }

}
