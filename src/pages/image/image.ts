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
images:any=categories;//the image array for each category
img="https://bit.ly/2MDc4b4";//shorturl.at/doEJ4
ind=0;//image index in the array
arrowb=true;// display arrow back 
arrowf=true;//display arrow forth
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    debugger;
    this.ind=navParams.get('idimage')-1;//started with 0 gets the image id 
    this.img=this.images[this.ind];
  }
goback(){//lets user go back to image before the current image

  debugger;
  this.ind=this.ind-1;//--
  if(this.ind==0){
    this.arrowb=false;
    this.arrowf=true;
  }
  else{
    this.arrowb=true;
    this.arrowf=true;

  }
  this.img=this.images[this.ind];
}
goforward(){// lets user go forward to next image from image array
  debugger;
  this.ind=this.ind+1;
  if(this.ind==this.images.length-1){
    this.arrowf=false;
    this.arrowb=true;
  }
  else{
    this.arrowb=true;
    this.arrowf=true;
  }
  this.img=this.images[this.ind];
}



goHome(event){//go to home page where u can choose again a category and start to play again...............
debugger;
this.navCtrl.push(CategoryPage,{});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

}
