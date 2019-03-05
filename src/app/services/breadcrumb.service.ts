import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {

  private items: Array<MenuItem> = new Array<MenuItem>();
  itemsSubject$: BehaviorSubject<Array<MenuItem>> = new BehaviorSubject<Array<MenuItem>>(this.items);
  
  constructor() {}

  pushItemBreadcrumb(item: MenuItem) {
    this.items.pop();
    this.items.push(item);
    this.itemsSubject$.next(this.items);
  }

  clearBreadcrumb() {
    this.items = new Array<MenuItem>();
    this.itemsSubject$.next(this.items);
  }
}