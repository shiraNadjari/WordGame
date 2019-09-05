import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryimagesPage} from '../categoryimages/categoryimages';

import { category,categories } from '../../app/classes/category';
import{CategoriesServiceProvider}from '../../providers/categories-service/categories-service';


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
  empty;
  items:any=0;//arr of caterories!
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public servCategory:CategoriesServiceProvider) {
   debugger;
    //service call to get all categories 
   // this.presentAlert();
    this.getCategories();
  }

   resolveAfter4Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          this.servCategory.getcategories().then(data => {
            this.items = data;
            debugger;
            console.log(this.items);
          })
        );
      }, 4000);
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
    var x = await this.resolveAfter4Seconds();
    this.items = this.items;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
 itemTapped(event,item:category){
   
   //item=//we need category name
 this.navCtrl.push(CategoryimagesPage,{categoryName:item.CategoryName,categoryId:item.CategoryId}); 
}
}
