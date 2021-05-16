import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports router
import { AppComponent } from './app.component';
import { ContainersComponent } from './containers/containers.component';
import { HeaderComponent } from './header/header.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FooterComponent } from './footer/footer.component';
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteMainComponent } from './route-main/route-main.component';
import { RoutePlayerComponent } from './route-player/route-player.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { HttpClientModule } from '@angular/common/http'
import { MongodbService } from './mongodb/services/mongodb.service';
import { MaterialComponent } from './material/material.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarrouselRecomendadosComponent } from './carrousel-recomendados/carrousel-recomendados.component';
import { CarrouselUltimoAgregadoComponent } from './carrousel-ultimo-agregado/carrousel-ultimo-agregado.component';
import { NguCarouselModule } from '@ngu/carousel';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';



@NgModule({
  declarations: [
    AppComponent,
    ContainersComponent,
    HeaderComponent,
    CarteleraComponent,
    FooterComponent,
    RouteHomeComponent,
    RouteMainComponent,
    RoutePlayerComponent,
    RegistroComponent,
    LoginComponent,
    ReproductorComponent,
    MaterialComponent,
    CarrouselRecomendadosComponent,
    CarrouselUltimoAgregadoComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NguCarouselModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    PasswordStrengthMeterModule,
    ShowHidePasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
