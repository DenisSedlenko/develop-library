import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {

  private items: MenuItem[] = [];
  itemsSubject$: BehaviorSubject<Array<MenuItem>> = new BehaviorSubject<Array<MenuItem>>(this.items);
  
  constructor() {}

  pushItemBreadcrumb(item: MenuItem) {
    if (this.items.length && this.items[this.items.length - 1].label === item.label) {
      return;
    }

    this.items.push(item);
    this.itemsSubject$.next(this.items);
  }

  removeLastItemBreadcrumb() {
    this.items.pop();
    this.itemsSubject$.next(this.items);
  }
}