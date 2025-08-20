import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
 categories: Category[] = [
    {
      id: 1,
      name: 'Limo',
      products: [
        { id: 101, name: 'Cola', size: '0,33', price: '3,90' },
        { id: 102, name: 'Cola Light', size: '0,33', price: '3,90' },
        { id: 103, name: 'Cola Zero', size: '0,33', price: '3,90' },
        { id: 104, name: 'Limo Orange', size: '0,33', price: '3,90' },
        { id: 105, name: 'Limo Lemon', size: '0,33', price: '3,90' }
      ]
    },
    {
      id: 2,
      name: 'Beer',
      products: [
        {
          id: 201,
          name: 'Jever Drafted',
          options: [
            { id: 2011, name: 'Small', variant: '0.3', price: '3,90' },
            { id: 2012, name: 'Big', variant: '0,5', price: '5,90' }
          ]
        },
        {
          id: 202,
          name: 'Oberdorfer Drafted',
          options: [
            { id: 2021, name: 'Small', variant: '0.3', price: '4,10' },
            { id: 2022, name: 'Big', variant: '0,5', price: '6,10' }
          ]
        },
        { id: 203, name: 'Jever Bottle', size: '0,33', price: '3,90' }
      ]
    },
    {
      id: 3,
      name: 'Hot Drinks',
      products: [
        {
          id: 301,
          name: 'Coffee',
          options: [
            { id: 3011, name: 'Small', variant: '0,2', price: '3,10' },
            { id: 3012, name: 'Big', variant: '0,3', price: '4,10' }
          ]
        },
        { id: 302, name: 'Hot Chocolate' },
        { id: 303, name: 'Tea' }
      ]
    }
  ];

  

  getCategories(): Category[] {
    return this.categories;
  }
 
}
