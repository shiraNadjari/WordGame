import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryimagesPage} from '../categoryimages/categoryimages';
import { categories } from '../../app/classes/category';
import {CategoriesServiceProvider} from '../../providers/categories-service/categories-service'
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
items=categories;
  constructor(public navCtrl: NavController, public navParams: NavParams,public serv:CategoriesServiceProvider) {
   debugger;
    var res=serv.getcategories();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
 itemTapped(event,item:string){
   debugger;
   //item=//we need category name
 this.navCtrl.push(CategoryimagesPage,{blabla:item}); 
}
}
