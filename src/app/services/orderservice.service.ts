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

  addToOrder(product: Product, option: ProductOption) {
    // Prüfen, ob das Produkt mit derselben Option schon existiert
    const existingItem = this.actualOrder.find(
      item => item.product.id === product.id && item.option.id === option.id
    );

    if (existingItem) {
      // Falls vorhanden → Menge erhöhen
      existingItem.amount++;
    } else {
      // Falls nicht vorhanden → neues Item anlegen
      this.actualOrder.push({
        product,
        option,
        amount: 1
      });
    }
  }
}
