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
items=categories;//arr of caterories!
  constructor(public navCtrl: NavController, public navParams: NavParams,public servCategory:CategoriesServiceProvider) {
    debugger;
    // this.servCategory.getcategories();
    // this.items=this.servCategory.cateroriesArr;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
 itemTapped(event,item:category){
   debugger;
   //item=//we need category name
 this.navCtrl.push(CategoryimagesPage,{blabla:item,categoryId:item.CategoryId}); 
}
}
