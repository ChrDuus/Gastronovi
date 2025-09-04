import { Component, inject } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  paymentService = inject(PaymentService)

  setPaymentMethod(method: string){
    this.paymentService.setPaymentMethod(method)
  }

}
