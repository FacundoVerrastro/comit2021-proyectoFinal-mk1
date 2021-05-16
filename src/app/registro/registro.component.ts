import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../auth/services/auth.service';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService]
})


export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    userRegister: new FormControl(''),
    emailRegister: new FormControl(''),
    passwordRegister: new FormControl('')
  });
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {

  }
  onRegister() {
    const { userRegister, emailRegister, passwordRegister } = this.registerForm.value;
    this.authSvc.register(userRegister, emailRegister, passwordRegister)
      .then(() => {
        this.authSvc.logIn(emailRegister, passwordRegister)
          .then(() => {
            window.location.reload();
          });
      })
  }
  get passwordRegister() {
    return this.registerForm.get('passwordRegister');
  }
  acepto() {
    document.getElementById('buttonRegistrarse')?.classList.toggle('disabled');
  }
}
