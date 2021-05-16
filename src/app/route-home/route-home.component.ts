import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { MongodbService } from '../mongodb/services/mongodb.service';

@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {


  constructor(private authSvc: AuthService, private router: Router, private mongodb: MongodbService) { }
  movies = 0;
  series = 0;
  async ngOnInit() {
    await this.countMoviesAndSeries();
    const user = await this.authSvc.getCurrentUser();
    if (user) this.ingresar();
  }

  async ingresar() {
    const user = await this.authSvc.getCurrentUser();
    if (user) {
      this.router.navigate(['/main']);
    } else {
      document.getElementById('dropdownForm1')?.click();
    }
  }
  async countMoviesAndSeries() {
    this.mongodb.countType("movie").subscribe(
      data => {
        if (data) this.movies = data.count;
      }
    )
    this.mongodb.countType("serie").subscribe(
      data => {
        if (data) this.series = data.count;
      }
    )
  }
}
