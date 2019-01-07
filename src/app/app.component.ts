import { Component } from '@angular/core';
import { Item } from './multi-select/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-select-list';
  groceryList: Item[] = [
    new Item('Jar Berry', 'Reset'),
    new Item('Island Sale', 'IS'),
    new Item('Original Network', 'ON'),
    new Item('Internal Tank', 'IT')
  ];

  constructor() {
    this.groceryList[0].setImage('broken.png');
  }
}
