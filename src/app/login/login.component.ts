import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public isLogged = false;
  public user: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    passwordLogin: new FormControl('', [Validators.required])
  });
  constructor(private authSvc: AuthService) {
  }

  async ngOnInit() {
    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
    }
  }
  async onLogin() {
    const { emailLogin, passwordLogin } = this.loginForm.value;
    try {
      const user = await this.authSvc.logIn(emailLogin, passwordLogin)
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      console.log(error)
    }
  }
  async onLogout() {
    try {
      this.authSvc.logOut()
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  }
  get emailLogin() {
    return this.loginForm.get('emailLogin');
  }
  get password() {
    return this.loginForm.get('passwordLogin');
  }
}
