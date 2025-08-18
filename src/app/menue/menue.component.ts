import { Component, inject } from '@angular/core';
import { Category } from '../interfaces/category';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-menue',
  imports: [],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss'
})
export class MenueComponent {

  productService = inject(ProductsService)
  
  
  selectedCategory: Category | null = null

  openProducts(category: Category){
    this.selectedCategory = category
  }

  backToCategories() {
    this.selectedCategory = null;
  }

}
