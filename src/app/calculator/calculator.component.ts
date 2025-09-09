import { Component } from '@angular/core';
import { OrderserviceService } from '../services/orderservice.service';
import { inject } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  orderService = inject(OrderserviceService)

  totalPrice = signal<number>(0);
  givenAmount = signal<string>('0'); 
  change = signal<number>(0);

  ngOnInit() {
    this.totalPrice.set(this.orderService.getTotalPrice());
  }

  addDigit(digit: string) {
    this.givenAmount.update(v => v + digit);
    this.calculateChange();
  }

  clear() {
    this.givenAmount.set('');
    this.change.set(0);
  }

  calculateChange() {
    const given = parseFloat(this.givenAmount());
    if (!isNaN(given)) {
      this.change.set(given - this.totalPrice());
    } else {
      this.change.set(0);
    }
  }

  continuePayment() {
    this.orderService.calculatorOpen.set(false)
    this.orderService.safeOrder()
    this.orderService.checkingOrder.set(false)
  }

  closeCalculator(){
    this.orderService.calculatorOpen.set(false)
  }

}
