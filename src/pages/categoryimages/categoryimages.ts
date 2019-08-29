import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{images, image}from'../../app/classes/image';
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
imagesArr=images;//paginig 10 at a time
NumofPages:any;
currentPage:any;
arrPages=[];
servCateg:CategoriesServiceProvider;//category service 
servImage:ImagesProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,servCategory:CategoriesServiceProvider,
    serveImageProv:ImagesProvider) {
    debugger;
    this.categoryname=navParams.get('categoryName');
    this.categoryId=navParams.get('categoryId');
    this.servCateg=servCategory;// public variables to this ts
    this.servImage=serveImageProv;

    this.currentPage=1;//always begin with 1 page!
    this.NumofPages=10;//service call-get number of pages per category=
    //servCategory.getNumPageByCategoryId(this.categoryId);
    
    // enter the current images in this page
    //this.imegesArr=serveImageProv.getTenImagesByCategory(this.categoryId);

   //to display on the bottom the current page & prev- next
  for (let index = 1; index <= 10; index++) {
    this.arrPages[index]=index;}
  }
GetImagesPage(NumPage:number){
    //we put in the numpage index of page!!
    //this service call return 10 images in this page,we put it in the array
    this.imagesArr= this.servImage.getTenImagesByCategory(NumPage-1);

}

prevPage(){
this.currentPage=this.currentPage-1;
//service call - get the prev page of this category
    this.GetImagesPage(this.currentPage);
  }
 nextPage(){
  this.currentPage=this.currentPage+1;
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
