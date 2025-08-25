import { Injectable } from '@angular/core';
import { ProductOption } from '../interfaces/product-option';
import { Product } from '../interfaces/product';
import { Order } from '../interfaces/order';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor() { }

  checkingOrder= signal<boolean>(false)
  calculatorOpen = signal<boolean>(false)
  choosePaymentMethod = signal<boolean>(false)

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

  getPricePerProduct(singlePrice:number | undefined, index:number){
    let price = 0
    if(singlePrice){
     price = singlePrice * this.actualOrder[index].amount
    }
    return price
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
      
      return parseFloat(price.toFixed(2));
    }

}
