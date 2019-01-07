import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input() data: Item[];

  constructor() {

   }

  ngOnInit() {
  }

  getClass(i: Item): string {

    return i.getSelected() ? 'selected' : '';
  }

  onClick(i: Item) {
    console.debug(i.getText());
    i.setSelected(!i.getSelected());
  }

  onDoubleClick() {
    console.debug('it\'s-a me! double click!')
  }
}
