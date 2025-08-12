import { Component } from '@angular/core';

@Component({
  selector: 'app-menue',
  imports: [],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss'
})
export class MenueComponent {

  types = ['Limo',
           'Beer',
           'Hot Drinks'
  ]
  limo =['Cola',
         'Cola Light',
         'Cola Zero',
         'Limo Orange',
         'Limo Lemon'
  ]

  beer = ['Jever Drafted',
          'Oberdorfer Drafted',
          'Jever Bottle',
  ]

  hotDrinks =['Coffee',
              'Hot Chocolade',
              'Tea'
  ]

}
