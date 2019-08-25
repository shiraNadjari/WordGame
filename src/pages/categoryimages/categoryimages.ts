import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoryname=navParams.get('blabla');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryimagesPage');
  }

}
