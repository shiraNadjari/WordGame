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
imagesArrLoad;
NumofPages:any;
NumofPagesLoaded:any;
currentPage:any;
arrPages=[];
display: boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servCategory:CategoriesServiceProvider,
   public serveImageProv:ImagesProvider) {
     debugger;
    this.categoryname=navParams.get('categoryName');
    this.categoryId=navParams.get('categoryId');
    //get number of pages
    this.getnumpages();
    //delete...
    this.NumofPages=10;
    this.currentPage=1;//always begin with 1 page!
    // enter the current images in this page
   // this.getimages();

  this.ArrayPage();
  }
  ArrayPage() {
    //to display on the bottom the current page & prev- next
    debugger;
    if(this.currentPage+4<this.NumofPages)
    {

  for (let index = this.currentPage+1,i=0; index <= this.currentPage+4 && index<=this.NumofPages; index++,i++) {
    this.arrPages[i]=index;
  } 
  debugger;
  if(this.NumofPages-4 <= this.currentPage)
 
    this.display=false;
 else{
    this.display=true;
  }
}
}
  resolveAfter4SecondsNumPages() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
         
          this.servCategory.getNumPageByCategoryId(this.categoryId).then(data => {
            this.NumofPagesLoaded=data;
            console.log(this.NumofPages);
          })
        );
      },4000);
    });
  }

  async getnumpages() {
    var x = await this.resolveAfter4SecondsNumPages();
    debugger;
    this.NumofPages = this.NumofPagesLoaded+1;
    //cancel after
    this.NumofPages=10;
  }

  resolveAfter4Secondsimages() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          this.serveImageProv.getTenImagesByCategory(this.categoryId,this.currentPage-1).then(data => {
            this.imagesArrLoad = data;
            console.log(this.NumofPages);
          })
        );
      }, 4000);
    });
  }

  async getimages() {
    var x = await this.resolveAfter4Secondsimages();
    this.imagesArr = this.imagesArrLoad;
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
   debugger;
  this.currentPage=cur;
  this.GetImagesPage(this.currentPage);
  this.ArrayPage();
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
