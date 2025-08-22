import { Component, inject } from '@angular/core';
import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { ProductOption } from '../interfaces/product-option';
import { OrderserviceService } from '../services/orderservice.service';

@Component({
  selector: 'app-menue',
  imports: [],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss'
})
export class MenueComponent {

  productService = inject(ProductsService)
  orderService = inject(OrderserviceService)
  
  
  selectedCategory: Category | null = null
  selectedProduct: Product | null = null
  optionsOpen: boolean = false

  openProducts(category: Category){
    this.selectedCategory = category
  }

  backToCategories() {
    this.selectedCategory = null;
  }

  backToProducts(){
    this.selectedProduct = null;
  }

  openOptions(product:Product){
    this.optionsOpen= true
    this.selectedProduct = product
    
    
    
  }

  addToCartWithOptions(option:ProductOption){
      if (this.selectedProduct) {
    this.orderService.addToOrder(this.selectedProduct, option);
    }
    this.selectedProduct = null;  
    this.optionsOpen = false  
  }

  addProductToCart(product:Product){
    
    this.selectedProduct = product;
    
    if(this.selectedProduct){
      this.orderService.addToOrder(product);
    }
    this.selectedProduct = null;    
    }
  

}
