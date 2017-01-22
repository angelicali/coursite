import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  @Input()
  courses: string[];//TODO: input courses for it
  @Input()
  userid: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  closeUserSettings(){
    var modal = document.getElementById("userSettings");
    modal.style.display = "none";
  }

  saveProfileChanges(){
    var inputCourses = (<HTMLInputElement>document.getElementById("inputCourses")).value;
    this._userService.updateCourses(this.userid,inputCourses)
      .subscribe(
        () => console.log("saving")
      );
  }

}
