import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesServiceProvider {
cateroriesArr:any;
  constructor(public http: HttpClient) {
    console.log('Hello CategoriesServiceProvider Provider');
  }
  getcategories(): any {
    return this.http.get("http://localhost:60928/api/Categories/")
    .toPromise().then(
      res => { 
        this.cateroriesArr=res;
        return res;
       })
      .catch(err => { return false;})
  }

}
