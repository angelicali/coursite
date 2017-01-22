import {Component, OnInit, Input} from '@angular/core';
import {CourseService} from "../course.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input()
  userid: string = "";
  @Input()
  courseid: string = "";
  @Input()
  btns: any[] = [{'name':'btn1','link':'link1'}];
  //TODO: btns will disappear even if changes not saved. Save original buttons?

  constructor(private _courseService: CourseService) { }

  ngOnInit() {
  }

  closeSettings(){
    var modal = document.getElementById(this.courseid+"-settings");
    modal.style.display = "none";
    //this.saveChanges();
  }

  saveChanges(){
    var i,btn_name,link,btn,new_btns;
    new_btns = new Array();
    for(i=0; i< this.btns.length; i++){
      btn_name = document.getElementById(this.courseid+"-btn"+i+"-input");
      btn_name = btn_name.value;
      link = document.getElementById(this.courseid+"-link"+i+"-input");
      link = link.value;
      if(!(btn_name==""&&link=="")){
        btn = {name:btn_name, link: link};
        new_btns.push(btn);
      }
    }
    console.log(new_btns);
    this._courseService.updateUserBtns(this.courseid,this.userid,new_btns)
      .subscribe(
        () => console.log("saving new btns")
      );
  }

  addBtn(){
    this.btns.push({"name":"","link":""});
  }

  deleteBtn(i: number){
    this.btns.splice(i,1);
  }
}
