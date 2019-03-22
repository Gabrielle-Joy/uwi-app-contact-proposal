import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  items: any;

  constructor(public http: Http) {
    
    this.items = [
      {
        title: 'Faculty of Humanities and Education Deans\' Office',
        number: '876-927-0221',
        ext: '2627/2828'
      },
      {
        title: 'Faculty of Law Deans\' Office',
        number: '876-927-1855',
        ext: '2405'
      },
      {
        title: 'Faculty of Medical Sciences Deans\' Office',
        number: '876-927-1297',
        ext: '7-2478-9'
      },
      {
        title: 'Faculty of Science and Technology Deans\' Office',
        number: '876-977-1785',
        ext: '2401/2961/2962'
      },
      {
        title: 'Faculty of Social Sciences Deans\' Office',
        number: '876-977-3536',
        ext: '2220-2'
      }
    ]

  }

  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase())> -1;
    });
  }

}
