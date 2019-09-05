import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Img } from 'ionic-angular';

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
    return this.http.get("http://5d638c4c.ngrok.io/api/Images/"+categoryId+"?time="+numpage)
    .toPromise().then(
      res => { 
        
        this.imagesArr=res;
        console.log(res);
        return res; })
      .catch(err => { return false;})
  
  }

}
