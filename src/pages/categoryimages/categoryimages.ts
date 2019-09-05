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
NumofPages:any;
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
    this.NumofPages=10;
    this.currentPage=1;//always begin with 1 page!
    // enter the current images in this page
    this.getimages();
    
 // this.ArrayPage();
  }

ArrayPage() {
    //to display on the bottom the current page & prev- next
  if(this.currentPage+4 < this.NumofPages)//need to change the array value
 {
  for (let index = this.currentPage+1,i=0; index <= this.currentPage+4 && index<=this.NumofPages; index++,i++) {
    this.arrPages[i]=index;//to display this pages

    if(this.arrPages[i]==this.NumofPages){//checks if to display last number only if last num isn't in the array
      this.last=false;
      }
    if(this.currentPage=this.NumofPages-1)
    {
      this.display=false;
    }
  } 
//   if(this.NumofPages-4 <= this.currentPage)
//     this.display=false;
//  else{
    
    this.displayCurr=true;
// }
}
else{
  this.display=false;
  this.displayCurr=false;
  for (let index = this.NumofPages-4,i=0; index <= this.NumofPages && index<=this.NumofPages; index++,i++) {
    this.arrPages[i]=index;//to display this pages
  } 
}
this.checkIfNumPageInArray();
// if(this.currentPage+5=this.NumofPages)

}
checkIfNumPageInArray() {
   for (let i = 0; i < this.arrPages.length; i++) {
     if(this.arrPages[i]==this.NumofPages){
       this.display=false;
       if(this.arrPages[i]==this.NumofPages){
       this.last=false;
       }
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
    this.NumofPages = this.NumofPagesLoaded+1;
    //cancel after
    this.NumofPages=10;
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

            console.log(this.NumofPages);
          })
        );
      }, 4000);
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

// prevPage(){
// this.currentPage=this.currentPage-1;
// //service call - get the prev page of this category
//     this.GetImagesPage(this.currentPage);
//   }
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
