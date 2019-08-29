import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagesProvider {
imagesArr:any;
  constructor(public http: HttpClient) {
    console.log('Hello ImagesProvider Provider');
  }
  getTenImagesByCategory(categoryId:number,numpage:number): any {
    return this.http.get("http://localhost:60928/api/Images/"+categoryId+"?time="+numpage)
    .toPromise().then(
      res => { 
        this.imagesArr=res;
        return res; })
      .catch(err => { return false;})
  
  }

}
