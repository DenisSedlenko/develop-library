import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export default class BreadcrumbService {

  private items: MenuItem[] = [];
  itemsSubject$: BehaviorSubject<Array<MenuItem>> = new BehaviorSubject<Array<MenuItem>>(this.items);
  
  constructor() {}

  pushItemBreadcrumb(item) {
    this.items.push(item);
    this.itemsSubject$.next(this.items);
  }

  removeLastItemBreadcrumb() {
    this.items.splice(this.items.length - 1, 1);
    this.itemsSubject$.next(this.items);
  }
}