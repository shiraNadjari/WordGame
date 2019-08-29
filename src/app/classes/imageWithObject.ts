import { image } from "./image";
import { imageObject } from "./Object";
import { List } from "ionic-angular";

export class imageWithObject {
    public COMimage:image;
    public imageObjects:imageObject[];//= List<imageObject>
   
   
    constructor(myImage: image, imageObjArr: imageObject[]) {
       
        this.COMimage = myImage;
        this.imageObjects = imageObjArr;       
    }
}
