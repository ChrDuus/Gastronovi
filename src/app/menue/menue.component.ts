import { Component } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-menue',
  imports: [],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss'
})
export class MenueComponent {

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
        { name: 'Jever Drafted',
          options: [
            {name:'0,3'},
            {name:'0,5'}
          ]
         },
        { name: 'Oberdorfer Drafted' },
        { name: 'Jever Bottle' }
      ]
    },
    {
      name: 'Hot Drinks',
      products: [
        { name: 'Coffee' },
        { name: 'Hot Chocolate' },
        { name: 'Tea',
          options:[
            {name: 'Black Tea'},
            {name:'Green Tea'},
            {name: 'Mint Tea'}
          ]
         }
      ]
    }
  ];
  
  selectedCategory: Category | null = null

  openProducts(category: Category){
    this.selectedCategory = category
  }

  backToCategories() {
    this.selectedCategory = null;
  }

}
