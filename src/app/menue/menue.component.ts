import { Component, inject } from '@angular/core';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';
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
  selectedProduct: Product | null = null

  openProducts(category: Category){
    this.selectedCategory = category
  }

  backToCategories() {
    this.selectedCategory = null;
  }

  openOptions(product:Product){
    this.selectedProduct = product
    
  }

  addToCart(){
    
  }

}
