import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  debugger;
  items//arr of caterories!
  constructor(public navCtrl: NavController, public navParams: NavParams,public servCategory:CategoriesServiceProvider) {
    debugger;
    //service call to get all categories 
    
    this.getCategories();
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
      }, 4000);
    });
  }

  async getCategories() {
    var x = await this.resolveAfter4Seconds();
    this.items = this.items;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
 itemTapped(event,item:category){
   debugger;
   //item=//we need category name
 this.navCtrl.push(CategoryimagesPage,{categoryName:item.CategoryName,categoryId:item.CategoryId}); 
}
}
