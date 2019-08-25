//the new on D:
export class category {
    public catId:number;
    public catName:string;
    public image: string;
   
    

    
    constructor(cat_Name: string, cat_id: number, image: string) {
       
        this.catId = cat_id;
        this.catName = cat_Name;
        this.image = image;
       
    }
}

export const categories: category[] = [
    new category( "food", 1, "https://www.rami-levy.co.il/files/products/big/97.jpg"),
    new category( "animals", 2, "https://www.iritsadan.com/wp-content/uploads/veg-630x450.jpg"),
    new category( "clothes",3, "https://www.iritsadan.com/wp-content/uploads/veg-630x450.jpg"),
    new category( "weather",4, "https://www.iritsadan.com/wp-content/uploads/veg-630x450.jpg"),
    new category( "weather",5, "https://www.iritsadan.com/wp-content/uploads/veg-630x450.jpg"),
    new category( "weather",6, "https://www.iritsadan.com/wp-content/uploads/veg-630x450.jpg")
];