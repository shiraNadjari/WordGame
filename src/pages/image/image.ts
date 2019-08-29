import {CategoryPage}from'../../pages/category/category';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import{images}from'../../app/classes/image';
import{ImagesProvider}from '../../providers/images-service/images-service';

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
images:any=images;//the image array for each category
img;//="https://bit.ly/2MDc4b4";//shorturl.at/doEJ4
ind=0;//image index in the array
arrowb=false;// display arrow back 
arrowf=true;//display arrow forth
heigtscreen:any;
widthscreen:any;
categoryId: any;
  yScreen: number;
  xScreen:number;


  constructor(public navCtrl: NavController, public navParams: NavParams,servImage:ImagesProvider,platform:Platform) {
    debugger;
    this.categoryId=navParams.get('categoryId');
    this.ind=navParams.get('idimage')-1;//started with 0 gets the image id
    //service call - 10 images lodaing 
    // servImage.getImagesByCategory(this.ind);
     this.img=this.images[this.ind];
     this.heigtscreen=platform.height();
     this.widthscreen=platform.width();
    
  }
goback(){//lets user go back to image before the current image

  debugger;
  this.ind=this.ind-1;//--
  if(this.ind==0){
    this.arrowb=false;
    this.arrowf=true;
    //iocon prev page service call
  }
  else{
    this.arrowb=true;
    this.arrowf=true;

  }
  this.img=this.images[this.ind];
}
x:number;
y:number;
elementinfo:any;
b:any;
findObject(event){
  debugger;
  console.log;
  this.x=event.clientX;//the click position that the user  made-x
  this.y=event.clientY;//" y
   this.elementinfo=document.getElementById("image").getBoundingClientRect();
  this.yScreen =this.heigtscreen-  this.elementinfo.bottom;
  this.xScreen =this.widthscreen-  this.elementinfo.left;
  this.x-=this.xScreen;
  this.y-=this.yScreen;
///
  
}

goforward(){// lets user go forward to next image from image array
  debugger;
  this.ind=this.ind+1;
  if(this.ind==this.images.length-1){
    this.arrowf=false;
    this.arrowb=true;
    //iocon next page service call
    
  }
  else{
    this.arrowb=true;
    this.arrowf=true;
  }
  this.img=this.images[this.ind];
}



goHome(event){//go to home page where u can choose again a category and start to play again...............
debugger;
this.x=event.clientX;
  this.y=event.clientY;
this.navCtrl.push(CategoryPage,{});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

}
