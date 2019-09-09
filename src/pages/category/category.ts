import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Img } from 'ionic-angular';
import { CategoryimagesPage} from '../categoryimages/categoryimages';

import { category,categories } from '../../app/classes/category';
import{CategoriesServiceProvider}from '../../providers/categories-service/categories-service';
import { UsergalaryPage } from '../usergalary/usergalary';


/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
  
})
export class CategoryPage {
  arrPages:any=[];
  currentPage = 1;
  numOfPages = 10 ;
  empty;
  numrow;
  items:any[]=null;//arr of caterories!
  items2:any[];
  aa;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public servCategory:CategoriesServiceProvider) {
  
    //service call to get all categories 
   // this.presentAlert();
    this.getCategories();
  }
  userId:any;
  gotopageusergalary(event){
    this.userId=12;
    // this.userId=
    this.navCtrl.push(UsergalaryPage,{userId:this.userId}); 
  }
  resolveAfter4Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          this.servCategory.getcategories().then(data => {
            this.items = data;
            
            console.log(this.items);
          })
        );
      }, 250);
    });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    //alert.present();
  }
  async getCategories() {
    debugger;
    var x = await this.resolveAfter4Seconds();
    this.items = this.items;
    this.items2=this.items;
    debugger;
    this.aa=this.items2.concat(this.items);
    debugger;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
 itemTapped(event,item:category){
   //item=//we need category name
 this.navCtrl.push(CategoryimagesPage,{categoryName:item.CategoryName,categoryId:item.CategoryId}); 
}

}
