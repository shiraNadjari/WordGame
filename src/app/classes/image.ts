export class image{
    public ImageID:number;
    public URL:string;
    public CategoryID: number;
   
    
    constructor(Imgid: number, URL: string, categoryid: number) {
       
        this.ImageID = Imgid;
        this.URL = URL;
        this.CategoryID = categoryid;
       
    }
}