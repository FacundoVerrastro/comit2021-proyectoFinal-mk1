import { Component, OnInit, Input } from '@angular/core';
import { MongodbService } from '../mongodb/services/mongodb.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ChangeDetectorRef } from '@angular/core'


@Component({
  selector: 'app-carrousel-recomendados',
  templateUrl: './carrousel-recomendados.component.html',
  styleUrls: ['./carrousel-recomendados.component.css']
})
export class CarrouselRecomendadosComponent implements OnInit {

  @Input()

  materiales: any = this.cargarRecomendados();

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


  cargarRecomendados() {
    this.mongodb.getMaterialByRating(4).subscribe(
      data => {
        this.materiales = data;
        this.materiales = this.shuffle(this.materiales);
        this.slides = this.chunk(this.materiales, 3);
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
  navigate(name: String) {
    this.router.navigate([`/${name}`])
  }
}