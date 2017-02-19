import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../user.service";
import './../edit.png';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  term:string;
  year:number;
  @Input()
  uid: string = "default-uid";
  @Input()
  authname: string = "default-authname";
  user: any;

  name: string;
  courses: string[];

  constructor(private _userService: UserService) {
      this.term = "Spring";
      this.year = 2017;
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this._userService.getUserInfo(this.uid)
      .subscribe(
        data => {
          this.user = data;
          if(this.user==null){
            this._userService.createUser(this.uid, this.authname).
              subscribe(
                data =>{
                  this.user = data;
                  this.name = this.user.name;
                  this.courses = this.user.courses;
                }
            );
            alert("Welcome! When your name shows up on the page, click your name to add your courses(e.g. PHYS212)!");
            location.reload();
          }else {
            if(this.user.name == "undefined"){
              this.name = this.authname;  //TODO: update user data for name as well!
              this._userService.createUser(this.uid, this.authname);
            }else {
              this.name = this.user.name;
            }
            this.courses = this.user.courses;
            console.log(this.user);
          }
        },
        error => alert(error),
        () => console.log("finished getting user info"));

  }


  popUpSettings(courseid: string){
    var modal = document.getElementById(courseid+'-settings');
    modal.style.display = "block";
  }

  popUpUserSettings(){
    var modal = document.getElementById('userSettings');
    modal.style.display = "block";
  }

}
