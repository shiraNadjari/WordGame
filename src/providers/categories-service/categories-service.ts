import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoriesServiceProvider Provider');
  }
  getcategories(lab:number,password:string): any {
    return this.http.get("http://localhost:60928/api/categories/")
    .toPromise().then(
      res => { return res; })
      .catch(err => { return false;})
  
  }

getImagesByCategory(lab:number,password:string): any {
    return this.http.get("http://localhost:60928/api/categories/")
    .toPromise().then(
      res => { return res; })
      .catch(err => { return false;})
  
  }
}
