import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class CourseService {

  constructor(private _http: Http) { }


  getUserBtns(courseid: string, userid: string){
    return this._http.get('https://coursite1.appspot.com/course/'+courseid+'/'+userid) //returns an observable
      .map(res => res.json());  //map the response we get back to a variable (left "res" is the passed-in value)
  }

  updateUserBtns(courseid: string, userid: string, buttons: any[]){
    var body = `buttons=${JSON.stringify(buttons)}`;
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');

    console.log(body);
    return this._http.post(`https://coursite1.appspot.com/editcourse/${courseid}/${userid}`,body,{headers:headers})
      .map(() => console.log("posting"));
  }

}
