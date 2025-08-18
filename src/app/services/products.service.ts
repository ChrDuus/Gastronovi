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
        { name: 'Cola', size: '0,33', price: '3,90' },
        { name: 'Cola Light', size: '0,33', price: '3,90' },
        { name: 'Cola Zero', size: '0,33', price: '3,90' },
        { name: 'Limo Orange', size: '0,33', price: '3,90' },
        { name: 'Limo Lemon', size: '0,33', price: '3,90' }
      ]
    },
    {
      name: 'Beer',
      products: [
        { name: 'Jever Drafted', options: [
          { name: 'Small', variant: '0.3', price: '3,90' },
           {name: 'Big', variant: '0,5', price: '5,90'}
          ] },
        { name: 'Oberdorfer Drafted', options: [
          { name: 'Small', variant: '0.3', price: '4,10' },
          {name: 'Big', variant: '0,5', price: '6,10'}
        ] },
        { name: 'Jever Bottle', size: '0,33', price: '3,90' }
      ]
    },
    {
      name: 'Hot Drinks',
      products: [
        { name: 'Coffee', options: [
          { name: 'Small', variant: '0,2', price: '3,10' },
        {name:'Big', variant: '0,3', price: '4,10'}
        ] },
        { name: 'Hot Chocolate' },
        { name: 'Tea' }
      ]
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
 
}
