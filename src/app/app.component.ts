import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any;
  title = 'app works!';
  constructor(public af: AngularFire){
    this.af.auth.subscribe(auth => console.log(auth));
    console.log("constructor log");
    console.log(af.auth);

  }

  login(){
    this.af.auth.login();
  }

}
