import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenueComponent } from './menue/menue.component';
import { CartComponent } from './cart/cart.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { OrderserviceService } from './services/orderservice.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [ MenueComponent, CartComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gastronovi';
  orderService = inject(OrderserviceService)
}
