import {CategoryPage}from'../../pages/category/category';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{categories}from'../../app/classes/category';

/**
 * Generated class for the ImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
images:any=categories;
img="https://bit.ly/2MDc4b4";
ind=0;
arrowb=true;
arrowf=true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
goback(){
  debugger;
  this.ind=this.ind-1;
  if(this.ind==0)
  this.arrowb=false;
  else{
    this.arrowb=true;
    this.arrowf=true;

  }
  this.img=this.images[this.ind];
}
goforward(){
  debugger;
  this.ind=this.ind+1;
  if(this.ind=this.images.length-1)
  this.arrowf=false;
  else{
    this.arrowb=true;
    this.arrowf=true;

  }
  this.img=this.images[this.ind];
}
goHome(){
debugger;
this.navCtrl.push(CategoryPage,{});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

}
