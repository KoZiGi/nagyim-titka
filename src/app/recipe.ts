export interface Recipe {
    ID:number;
    title:string;
    description:string;
    makingof:string;
    image:string;
    ingredients:Ingredient[];
}
export interface Ingredient{
    ID:number;
    foodID:number;
    ingredientID:number;
    name:string;
    amount:number;
    unit:string;
}
