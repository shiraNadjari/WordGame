export class image{
    public IMGId:number;
    public URL:string;
    public CategoryId: number;
   
    

    
    constructor(Imgid: number, URL: string, categoryid: number) {
       
        this.IMGId = Imgid;
        this.URL = URL;
        this.CategoryId = categoryid;
       
    }
}