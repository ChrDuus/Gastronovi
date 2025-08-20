import { Product } from "./product"
import { ProductOption } from "./product-option"
    
    
    export interface Order {

    product: Product;
    option?: ProductOption;
    amount: number;
   
}

