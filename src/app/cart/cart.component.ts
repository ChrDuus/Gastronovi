import { Component } from '@angular/core';
import { OrderserviceService } from '../services/orderservice.service';
import { inject } from '@angular/core';
import { Order } from '../interfaces/order';


@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  orderService = inject(OrderserviceService)

  changeAmount(index:number, direction:number){
    this.orderService.actualOrder[index].amount += direction
    if(this.orderService.actualOrder[index].amount <= 0){
      this.orderService.actualOrder.splice(index, 1)
    }
}

checkOrder(){
  this.orderService.checkingOrder.set(true)
  this.orderService.choosePaymentMethod.set(true)

  
}

openCalculator(){
  this.orderService.calculatorOpen.set(true)
}
}