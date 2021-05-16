import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb/services/mongodb.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { element } from 'protractor';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  source: SafeResourceUrl;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mongodb: MongodbService,
    private sanitizer: DomSanitizer
  ) {
    this.source = this.sanitizer.bypassSecurityTrustResourceUrl("");
  }
  episodio = null;
  titulo = null;
  id = null;
  name = null;
  img = null;
  duration = null;
  description = null;
  language = null;
  previusEpisode = 0;
  nextEpisode = 0;

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.mongodb.getMaterial(params.nombre).subscribe(
        data => {
          if (!data) this.router.navigate(['/main']);
          this.verificarEpisodio(data.episodios, params);
          this.episodio = data.episodios[params.episode - 1];
          this.titulo = data.name;
          return data;
        }, err => {
          this.router.navigate(['/main']);
        }
      )
    })
  }
  verificarEpisodio(array: Array<any>, params: Params) {
    let episodeExist = false;
    array.forEach(element => {
      if (element.id == params.episode) {
        episodeExist = true;
        this.id = element.id;
        this.name = element.name;
        this.language = element.language;
        console.log(this.language)
        this.source = this.sanitizer.bypassSecurityTrustResourceUrl(element.source);
        this.img = element.img;
        this.duration = element.duration;
        this.description = element.description;
        this.previusAndNext(array, element.id);
      };
    })
    if (!episodeExist) this.router.navigate([`/${params.nombre}`]);
  }
  previusAndNext(array: Array<any>, id: any) {
    array.forEach(element => {
      if (element.id == id - 1) this.previusEpisode = id - 1;
      if (element.id == id + 1) this.nextEpisode = id + 1;
    })
  }
  previus() {
    this.router.navigate([`/${this.titulo}/${this.previusEpisode}`]);
    this.previusEpisode = 0;
    this.nextEpisode = 0;
  }
  indice() {
    this.router.navigate([`/${this.titulo}`]);
  }
  next() {
    this.router.navigate([`/${this.titulo}/${this.nextEpisode}`]);
    this.previusEpisode = 0;
    this.nextEpisode = 0;
  }
}