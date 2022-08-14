import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  private isLogin: boolean = false;

  constructor() {
    if(localStorage.getItem('isLogin')=='true'){
        this.isLogin = true;
    }
   }

  CheckUserAuth ():boolean {
    return this.isLogin;
  }

  CheckLogin(email: string, password: string) {
    this.isLogin = true;
    localStorage.setItem('isLogin', 'true');
  }

  logOut() {
    this.isLogin = false;
    localStorage.setItem('isLogin', 'false');
  }
}
