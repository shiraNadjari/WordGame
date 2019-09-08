import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsergalaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usergalary',
  templateUrl: 'usergalary.html',
})
export class UsergalaryPage {
img:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ionViewDidLoad() {
  console.log('ionViewDidLoad UsergalaryPage');
}
OpenMyCamera(){
  debugger;
this.img="../../assets/imgs/panda.jpg";
}
OpenMyGalary(){
  debugger;
this.img="../../assets/imgs/panda.jpg";
}
sendIngToVision(){
  // service call - with img=string??
}
}
