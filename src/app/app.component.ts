import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenueComponent } from './menue/menue.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  imports: [ MenueComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gastronovi';
}
