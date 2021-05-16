import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { MongodbService } from '../mongodb/services/mongodb.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mongodb: MongodbService,
  ) {

  }
  nombre = null;
  type = null;
  img = null;
  generos = "";
  rating = null;
  yearOfRelease = null;
  cantEpisodios = 0;
  description = null;
  episodios = null;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.mongodb.getMaterial(params.nombre).subscribe(
        data => {
          if (!data) this.router.navigate(['/main']);
          this.nombre = data.name;
          this.type = data.type;
          this.img = data.img;
          this.cargarGeneros(data.generos);
          this.rating = data.rating;
          this.yearOfRelease = data.yearOfRelease;
          this.cantEpisodios = Object.keys(data.episodios).length;
          this.description = data.description;
          this.episodios = data.episodios;
          return data;
        }, err => {
          this.router.navigate(['/main']);
          console.log(err);
        }
      )
    })
  }
  cargarGeneros(array: Array<String>) {
    array.forEach(element => {
      this.generos += element;
      this.generos += ", ";
    });
    this.generos = this.generos.slice(0, -2);
  }
  linkToCap(id: String) {
    this.router.navigate([`/${this.nombre}/${id}`]);
  }
}
