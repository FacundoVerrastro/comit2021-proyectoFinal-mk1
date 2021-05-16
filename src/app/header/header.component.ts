import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  public isLogged = false;
  constructor(private authSvc: AuthService, private router: Router) { }

  async ngOnInit() {
    const user = await this.authSvc.getCurrentUser();
    if (!user) {
      this.router.navigateByUrl('/home');
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }

  }
}