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
    {text: 'Jar Berry', value: 'Reset'},
    {text: 'Island Sale', value: 'IS'},
    {text: 'Original Network', value: 'ON'},
    {text: 'Internal Tank', value: 'IT'}
  ];

  constructor() {
    this.groceryList[0].image = 'broken.png';
  }

  printSelection($selection: any) {
    console.debug(`selection: ${JSON.stringify($selection)}`);
  }
}
