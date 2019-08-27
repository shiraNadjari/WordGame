export class imageObject{
    ObjectId:number;
    Name:string;
    X1: number;
    X2: number;
    Y1: number;
    Y2: number;
    ImageID: number;

    constructor(id:number,n:string,x1:number,x2:number,y1:number,y2:number,imageid:number){
        this.ObjectId=id;
        this.Name=n;
        this.X1=x1;
        this.X2=x2;
        this.Y1=y1;
        this.Y2=y2;
        this.ImageID=imageid;
    }
}