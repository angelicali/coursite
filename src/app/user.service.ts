import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getUserInfo(uid: string){
    return this._http.get('https://coursite1.appspot.com/user/'+uid) //returns an observable
      .map(res => res.json());  //map the response we get back to a variable (left "res" is the passed-in value)
  }

  createUser(uid: string, name: string){
    var body = `userid=${uid}&name=${name}`;
    var headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('https://coursite1.appspot.com/user/'+uid,body,{headers:headers})
      .map(response => response.json());
  }

  updateCourses(uid: string, courses: string){
    var courseList = courses.split(",");
    var courseListJSON = JSON.stringify(courseList);

    var body = `courses=${courseListJSON}`;
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');

    console.log(body);
    return this._http.post(`https://coursite1.appspot.com/user/${uid}`,body,{headers:headers})
      .map(response => response.json());


  }

}
