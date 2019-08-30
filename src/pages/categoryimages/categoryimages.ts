import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{images, image}from'../../app/classes/image';
import{arrobj}from'../../app/classes/imageWithObject';
import{ImagePage}from'../image/image';
import { CategoriesServiceProvider } from '../../providers/categories-service/categories-service';
import { ImagesProvider } from '../../providers/images-service/images-service';

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
imagesArr=arrobj//paginig 10 at a time
NumofPages:any;
currentPage:any;
arrPages=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public servCategory:CategoriesServiceProvider,
   public serveImageProv:ImagesProvider) {
    debugger;
    this.categoryname=navParams.get('categoryName');
    this.categoryId=navParams.get('categoryId');
    //get number of pages
    //this.NumofPages=servCategory.getNumPageByCategoryId(this.categoryId);

    this.currentPage=1;//always begin with 1 page!
    this.NumofPages =10;//service call-get number of pages per category=
    
    
    // enter the current images in this page
    //this.imegesArr=serveImageProv.getTenImagesByCategory(this.categoryId,this.currentPage-1);
   //to display on the bottom the current page & prev- next
  for (let index = this.currentPage; index <= this.currentPage+5; index++) {
    this.arrPages[index]=index;
  }
  }
GetImagesPage(NumPage:number){
    //we put in the numpage index of page!!
    //this service call return 10 images in this page,we put it in the array
    this.imagesArr= this.serveImageProv.getTenImagesByCategory(this.categoryId,NumPage-1,);
    this.imagesArr=this.serveImageProv.imagesArr;
}

// prevPage(){
// this.currentPage=this.currentPage-1;
// //service call - get the prev page of this category
//     this.GetImagesPage(this.currentPage);
//   }
 nextPage(cur:number){
  this.currentPage=cur;
  this.GetImagesPage(this.currentPage);
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
