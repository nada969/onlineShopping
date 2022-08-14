import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  

  constructor(private _login: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  HandleLogin() {
    this._login.CheckLogin(this.email, this.password);
    this._router.navigate(['']);
  }

}
