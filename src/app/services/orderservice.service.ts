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
}
