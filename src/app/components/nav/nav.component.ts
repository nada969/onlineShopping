import { Component, Input, OnInit } from '@angular/core';
import { menuData } from './nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input()
  menuData:Array<menuData>=[];

  constructor() { }

  ngOnInit(): void {
  }

  showHide(x:HTMLDivElement) {
    console.log(x.className);
    if (x.className === "topnav menu") {
      
      x.className = "topnav responsive";
    } else {
      x.className = "topnav menu";
    }
  }


}
