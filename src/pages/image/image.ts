import {CategoryPage}from'../../pages/category/category';
import { Component } from '@angular/core';

import {AlertController, IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import{imageWithObject, arrobj, oneImageObj}from'../../app/classes/imageWithObject';
import{ImagesProvider}from '../../providers/images-service/images-service';
import { NativeAudio } from '@ionic-native/native-audio';
import { imageObject } from '../../app/classes/Object';
// import{}from '../../voice/horse.mp3'
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
images:any[];//the image array for each category
img;//="https://bit.ly/2MDc4b4";//shorturl.at/doEJ4//service call insert image obj...
ind=0;//image index in the array
arrowb=false;// display arrow back 
arrowf=true;//display arrow forth
counter:number=0;//curent number image
heigtscreen:any;
widthscreen:any;
categoryId: any;
yScreen: number;
xScreen:number;
  imagewidth: any;
  imageheight: any;
  
  constructor(private alertCtrl: AlertController,private audio:NativeAudio, public navCtrl: NavController, public navParams: NavParams,servImage:ImagesProvider,platform:Platform) {
    
    this.categoryId=navParams.get('categoryId');
    this.ind=navParams.get('idimage');//started with 0 gets the image id
    //service call - 10 images lodaing 
    // servImage.getImagesByCategory(this.ind);
    
    //the ten images that are currently in the system
     this.images=servImage.imagesArr;
     for (let index = 0; index < this.images.length; index++) {
       if(this.images[index].image.ImageID==this.ind)
       {
        this.img=this.images[index];
         break;
       }
       this.counter++;       
     }
    //  this.img=this.images.find(a=>a.image.ImageID==this.ind);
     this.heigtscreen=platform.height();
     this.widthscreen=platform.width();
    
  }
playobject()
{
  //MyObj.filevoice.mp3  MyObj:imageObject
  debugger;
  // "C:\Users\User\Downloads\horse.mp3"
  this.audio.preloadSimple('uniqueId1', '../../voice/horse.mp3').
  then(function(){
    console.log("audio loded!!");},function(err){
      debugger;
      console.log("failed!!!!  "+err);
    });
  this.audio.preloadComplex('uniqueId1', '../../voice/horse.mp3',1,1,0).
  then(function(){
    console.log("audio loded!!");},function(err){
      debugger;
      console.log("failed!!!!  "+err);
    });
  //   this.onSuccess, this.onError);
  // // console.log(Error);
  // // this.audio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);
  // this.audio.play('uniqueId1').then(this.onSuccess, this.onError);

}
onSuccess() {
  console.log('success!!!!!! wow!');
}
onError(){
  console.log('faild??!');
}
  
goback(){//lets user go back to image before the current image

  debugger;
 
  if(this.ind==0){
    this.arrowb=false;
    this.arrowf=true;
    //iocon prev page service call
  }
  else{
    this.arrowb=true;
    this.arrowf=true;

  }
  this.counter--;
 this.img=this.images[this.counter];
}
messagebox(nameobject:string)
{
  
    let alert = this.alertCtrl.create({
      title: 'object name',
      subTitle: nameobject,
      buttons: ['Dismiss']
    });
    alert.present();
  
}
x:number;
y:number;
elementinfo:any;
b:any; 
findobject(){
for (let index = 0; index < this.img.imageObjects.length; index++) {
  const OneObject = this.img.imageObjects[index]; 
  this.x/=this.imagewidth;
  this.y/=this.imageheight;
  
  //checks if the click is in the range of the current object is 
  if(this.x>=OneObject.X1&&this.y>=OneObject.Y1
    &&this.x<=OneObject.X2&&this.y>=OneObject.Y2
    &&this.x<=OneObject.X3&&this.y<=OneObject.Y3
    &&this.x>=OneObject.X1&&this.y<=OneObject.Y4)
    {
      //this.messagebox(OneObject.Name);
      console.log(OneObject.Name);
      //TextToSpeach
     // this.playobject();
    }
    this.x*=this.imagewidth;
  this.y*=this.imageheight;
} 
}
findclickcoordinants(event){

  console.log;
  this.x=event.clientX;//the click position that the user  made-x
  this.y=event.clientY;//" y
   this.elementinfo=document.getElementById("image").getBoundingClientRect();
  // this.yScreen =this.heigtscreen-  this.elementinfo.bottom;
  // this.xScreen =this.widthscreen-  this.elementinfo.left;
  // this.x-=this.xScreen;
  // this.y-=this.yScreen;
  ///find vision coordinates
 // this.findobject();
this.y=this.y-this.elementinfo.top;
this.x=this.x-this.elementinfo.left;

this.imagewidth=this.elementinfo.width;
this.imageheight=this.elementinfo.height;
this.findobject();

}

goforward(){// lets user go forward to next image from image array
  debugger;
 
  if(this.ind==this.images.length-1){
    this.arrowf=false;
    this.arrowb=true;
    //iocon next page service call
    
  }
  else{
    this.arrowb=true;
    this.arrowf=true;
  }
  this.counter++
  this.img=this.images[this.counter];
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
