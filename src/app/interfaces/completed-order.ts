import { Product } from "./product";
import { ProductOption } from "./product-option";
import { Order } from "./order";
import { DatePipe } from "@angular/common";

export interface CompletedOrder {    

 products:Order[];
 totalPrice:number;
 orderId: number;
 dateAndTime: DatePipe



}
