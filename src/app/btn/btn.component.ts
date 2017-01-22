import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input() name;
  @Input() link;


  constructor() { }

  ngOnInit() {
    if(this.link.slice(0,4)!="http"){
     this.link = "http://"+this.link;
    }
  }


}
