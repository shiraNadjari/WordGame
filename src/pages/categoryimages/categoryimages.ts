import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{images, image}from'../../app/classes/image';
import{imageWithObject}from'../../app/classes/imageWithObject';
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
last:boolean=true;
imagesArr:any=0;//paginig 10 at a time
imagesArrLoad;
numOfPages:any;
NumofPagesLoaded:any;
currentPage:any;
arrPages=[];
displayCurr:boolean=true;
display: boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public servCategory:CategoriesServiceProvider,
   public serveImageProv:ImagesProvider) {
    
    this.categoryname=navParams.get('categoryName');
    this.categoryId=navParams.get('categoryId');
    //get number of pages
    this.getnumpages();
    //delete...
    this.numOfPages=10;
    this.currentPage=1;//always begin with 1 page!
    // enter the current images in this page
    this.getimages();
    
 // this.ArrayPage();
  }

  resolveAfter4SecondsNumPages() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
         
          this.servCategory.getNumPageByCategoryId(this.categoryId).then(data => {
            this.NumofPagesLoaded=data;
            console.log(this.numOfPages);
          })
        );
      },250);
    });
  }

  async getnumpages() {
    var x = await this.resolveAfter4SecondsNumPages();
    this.numOfPages = this.NumofPagesLoaded+1;
    //cancel after
    this.numOfPages=10;
  //  this.ArrayPage();//the numbers pages
  }

  resolveAfter4Secondsimages() {
    this.imagesArr=0;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          this.serveImageProv.getTenImagesByCategory(this.categoryId,this.currentPage-1).then(data => {
            this.imagesArrLoad = data;
            console.log(this.imagesArrLoad);

            console.log(this.numOfPages);
          })
        );
      }, 250);
    });
  }

  async getimages() {
    var x = await this.resolveAfter4Secondsimages();
  
    // this.imagesArr = JSON.stringify(this.imagesArrLoad);
     this.imagesArr = this.imagesArrLoad;

    
   
    }

GetImagesPage(NumPage:number){
    //we put in the numpage index of page!!
    //this service call return 10 images in this page,we put it in the array
    this.imagesArr= this.serveImageProv.getTenImagesByCategory(this.categoryId,NumPage-1,);
    this.imagesArr=this.serveImageProv.imagesArr;
}
toolbarPages()
{
//  debugger;
  for (let i = 0; i < 4; i++) {// initilize the page array to zero
    this.arrPages[i]=0;
  }
  for (let i = 1; i < 5 && this.currentPage+i<=this.numOfPages ; i++) {//fill in the array with the current page and the 4 pages after it.
    this.arrPages[i-1]=this.currentPage+i;
  }
  for (let j = 0; j < 4; j++) {
    if(this.arrPages[j]==0)
      this.arrPages[j]="";
  }
}
 goToNextPrevPage(current : number){// change current page when next page clicked
    this.currentPage=current;
    this.toolbarPages();
    //get new page- ten image - call service
    this.nextPage(current);
 }

 nextPage(cur:number){
  
  this.currentPage=cur;
  this.GetImagesPage(this.currentPage);
  //this.ArrayPage();
  }

  navtoimage(event,item:imageWithObject){//send image id to image page and opens the page
    debugger;
    //item=//we need category name
     this.navCtrl.push(ImagePage,{idimage:item.image.ImageID,categoryId:this.categoryId}); 
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryimagesPage');
  }

}
