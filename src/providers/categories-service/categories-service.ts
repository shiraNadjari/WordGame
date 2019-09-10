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

//get num pages of this category-by category id 
  getNumPageByCategoryId(categoryId:number): any {
    return this.http.get("http://localhost:52093/api/Categories/"+categoryId).toPromise().then(
      res => { return res;})
      .catch(err => { return false;})
  }

  // get all the categories 
  getcategories(): any {

    return this.http.get("http://53e45410.ngrok.io/api/Categories/")
    .toPromise().then(
      res => { 
        this.cateroriesArr=res;
        console.log(res);
        return res;
       })
      .catch(err => { return false;})
  }

}
