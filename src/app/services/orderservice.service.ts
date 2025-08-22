import { Injectable } from '@angular/core';
import { ProductOption } from '../interfaces/product-option';
import { Product } from '../interfaces/product';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor() { }

  actualOrder:Order[] = []

  addToOrder(product: Product, option?: ProductOption) {
    const existingItem = this.actualOrder.find(
      item =>
        item.product.id === product.id &&
        (item.option?.id ?? null) === (option?.id ?? null)
    );

    if (existingItem) {
      existingItem.amount++;
    } else {
      this.actualOrder.push({
        product,
        option,
        amount: 1
      });
    }
  }

    getTotalPrice(){
      let price = 0
      this.actualOrder.forEach(product =>{
        if(!product.option && product.product.price){
         price += product.amount * product.product.price         
        }else if(product.option){
          price += product.amount * product.option.price
        }
      })
      
      return price.toFixed(2)
    }

}
