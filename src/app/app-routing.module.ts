import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteMainComponent } from './route-main/route-main.component';
import { RoutePlayerComponent } from './route-player/route-player.component'
import { MaterialComponent } from './material/material.component'
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  { path: 'home', component: RouteHomeComponent },
  { path: 'main', component: RouteMainComponent },
  { path: ':nombre', component: MaterialComponent },
  { path: ':nombre/:episode', component: RoutePlayerComponent },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }