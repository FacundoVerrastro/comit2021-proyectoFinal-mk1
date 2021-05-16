import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb/services/mongodb.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  materiales: any = this.cargarUltimoAgregado();
  constructor(private mongodb: MongodbService, private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    console.clear();
  }

  cargarUltimoAgregado() {
    this.mongodb.getLastMaterial(3).subscribe(
      data => {
        this.materiales = data;
        this.materiales = this.shuffle(this.materiales);
        this.cdr.detectChanges();
        return data;
      }, err => {
        console.log(err);
      }
    );
  }
  shuffle(array: any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
