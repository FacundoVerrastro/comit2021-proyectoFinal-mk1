import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { MongodbService } from '../mongodb/services/mongodb.service';
import { element } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions?: Observable<string[]>;

  values = '';

  constructor(private mongodb: MongodbService, private router: Router,) { }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.cargarTodo();

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  cargarTodo() {
    this.mongodb.getAllMaterial().subscribe(
      data => {
        for (let element of data) {
          this.options.push(element.name);
        }
        return data;
      }, err => {
        console.log(err);
      }
    );
  }
  onEnter() {
    let inputSearch = ((document.getElementById("inputSearch") as HTMLInputElement).value)
    this.router.navigate([`/${inputSearch}`]);
    console.clear();
  }
}
