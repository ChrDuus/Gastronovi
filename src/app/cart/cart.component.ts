import { Component } from '@angular/core';
import { OrderserviceService } from '../services/orderservice.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  orderService = inject(OrderserviceService)
}
