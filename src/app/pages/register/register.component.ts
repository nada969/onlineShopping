import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private _login: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  HandleRegister() {
    //this._login.CheckLogin(this.email, this.password);
    this._router.navigate(['login']);
    
  }

}
