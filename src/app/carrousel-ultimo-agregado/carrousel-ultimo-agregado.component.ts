import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb/services/mongodb.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-carrousel-ultimo-agregado',
  templateUrl: './carrousel-ultimo-agregado.component.html',
  styleUrls: ['./carrousel-ultimo-agregado.component.css']
})
export class CarrouselUltimoAgregadoComponent implements OnInit {

  materiales: any = this.cargarUltimoAgregado();
  constructor(private mongodb: MongodbService, private cdr: ChangeDetectorRef, private router: Router,) { }
  slides: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit(): void {
  }


  cargarUltimoAgregado() {
    this.mongodb.getLastMaterial(12).subscribe(
      data => {
        this.materiales = data;
        this.slides = this.chunk(this.materiales, 3);
        this.cdr.detectChanges();
        return data;
      }, err => {
        console.log(err);
      }
    );
  }
  navigate(name: String) {
    this.router.navigate([`/${name}`])
  }
}
