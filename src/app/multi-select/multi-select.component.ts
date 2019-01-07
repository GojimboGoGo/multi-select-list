import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input() data: Item[];

  @Output() selection: EventEmitter<Item[]> = new EventEmitter<Item[]>();

  constructor() {

   }

  ngOnInit() {
  }

  getClass(i: Item): string {

    return i.selected ? 'selected' : '';
  }

  onClick(i: Item) {
    i.selected = !i.selected;

    const arr = this.getSelection();
    this.selection.emit(arr);
  }

  onDoubleClick() {
    console.debug('it\'s-a me! double click!')
  }

  private getSelection(): Item[] {

    const arr: Item[] = [];

    this.data.forEach(i => {
      if(i.selected) {
        arr.push(Object.assign({}, i));
      }
    });
    return arr;
  }
}
