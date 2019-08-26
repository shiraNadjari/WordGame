import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{categories}from'../../app/classes/category';
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
categoryname:any;
imeges=categories;//paginig 10 at a time
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoryname=navParams.get('blabla');

  }
  navtoimage(event,item:string){
    debugger;
    //item=//we need category name
    this.navCtrl.push(ImagePage,{blabla:item}); 
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryimagesPage');
  }

}
