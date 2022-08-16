import { Component } from '@angular/core';
import { menuData } from './components/nav/nav'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onlineShopping';

  menuData:Array<menuData>=[
    {title:'Products', url:'Products'},
    {title:'cart', url:'cart'},
    {title:'Profile', url:'Profile',class:'Profile'}
  ]

}
