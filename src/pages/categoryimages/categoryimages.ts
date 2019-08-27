import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{images, image}from'../../app/classes/image';
import{ImagePage}from'../image/image';

/**
 * Generated class for the CategoryimagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoryimages',
  templateUrl: 'categoryimages.html',
})
export class CategoryimagesPage {
categoryId: any;
categoryname:any;
imeges=images;//paginig 10 at a time
NumofPages:any;
currentPage:any;
arrPages=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    debugger;
    this.currentPage=1;//always begin with 1 page!
    this.NumofPages=10;//service call-get number of pages per category
    this.categoryname=navParams.get('categoryName');
    this.categoryId=navParams.get('categoryId');
  for (let index = 1; index <= 10; index++) {
    this.arrPages[index]=index;
  }
  }
  prevPage(){
this.currentPage=this.currentPage-1;
  }
 nextPage(){
  this.currentPage=this.currentPage+1;
  }
  navtoimage(event,item:image){//send image id to image page and opens the page
    debugger;
    //item=//we need category name
    this.navCtrl.push(ImagePage,{idimage:item.ImageID,categoryId:this.categoryId}); 
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryimagesPage');
  }

}
