import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private _login: LoginService,  private _router: Router) { }
  value:any = '0';
  ngOnInit(): void {
  }

  signOut(){
    this._login.logOut();
    this._router.navigate(['login']);
  }

}
