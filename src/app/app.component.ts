import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenueComponent } from './menue/menue.component';
import { CartComponent } from './cart/cart.component';
import { OrderserviceService } from './services/orderservice.service';
import { inject } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { PaymentComponent } from './payment/payment.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [ MenueComponent, CartComponent, CalculatorComponent, PaymentComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gastronovi';
  orderService = inject(OrderserviceService)
  apiService = inject(ApiService)

   message = '';


  ngOnInit() {
    this.apiService.getHello().subscribe({
      next: res => this.message = res.message,
      error: err => console.error(err)
    });
    
    
  }
}
