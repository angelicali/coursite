import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from "./user.service";
import 'rxjs/Rx';
import {CourseService} from "./course.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CourseService]
})
export class AppComponent {
  public userid:string;
  public authname:string;

  constructor(public af: AngularFire){
    this.af.auth.subscribe(auth => {
      console.log(auth);
      var authUser = auth;
      if(authUser) {
        this.userid = authUser.uid;
        this.authname = authUser.google.displayName;  //TODO: name undefined here!
      }else{
        console.log("authUser is null");
      }
    });
    console.log("constructor log af.auth");
    console.log(af.auth);
  }

  login(){
    this.af.auth.login();
  }



}
