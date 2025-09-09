import { Component, signal, inject } from '@angular/core';
import { OrderserviceService } from '../services/orderservice.service';
import { PaymentService } from '../services/payment.service';
import { PaymentComponent } from '../payment/payment.component';


@Component({
  selector: 'app-orderlist',
  imports: [],
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.scss'
})
export class OrderlistComponent {
orderService = inject(OrderserviceService)
paymentService= inject(PaymentService)
}
