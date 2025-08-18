import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenueComponent } from './menue/menue.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gastronovi';
}
