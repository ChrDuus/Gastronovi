import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  chosenPaymentMethod = signal<string | null> (null)

  setPaymentMethod(method: string){
    this.chosenPaymentMethod.set(method)
  }
}
