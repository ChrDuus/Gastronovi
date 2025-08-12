import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
 categories: Category[] = [
    {
      name: 'Limo',
      products: [
        { name: 'Cola' },
        { name: 'Cola Light' },
        { name: 'Cola Zero' },
        { name: 'Limo Orange' },
        { name: 'Limo Lemon' }
      ]
    },
    {
      name: 'Beer',
      products: [
        { name: 'Jever Drafted', options: [{ name: 'Size', values: ['0.3l', '0.5l'] }] },
        { name: 'Oberdorfer Drafted', options: [{ name: 'Size', values: ['0.3l', '0.5l'] }] },
        { name: 'Jever Bottle' }
      ]
    },
    {
      name: 'Hot Drinks',
      products: [
        { name: 'Coffee', options: [{ name: 'Size', values: ['Small', 'Large'] }] },
        { name: 'Hot Chocolate' },
        { name: 'Tea' }
      ]
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
 
}
