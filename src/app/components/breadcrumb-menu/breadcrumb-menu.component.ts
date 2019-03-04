import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb-menu',
  templateUrl: './breadcrumb-menu.component.html',
  styleUrls: ['./breadcrumb-menu.component.css']
})
export class BreadcrumbMenuComponent implements OnInit, OnDestroy {

  constructor(private breadcrumbService: BreadcrumbService) { }

  items: MenuItem[];    
  home: MenuItem;
  itemSubscription: Subscription;

  ngOnInit() {
    this.home = {label: 'Main', icon: 'pi pi-home', url: 'board'};
    this.itemSubscription = this.breadcrumbService.itemsSubject$.subscribe((items) => {
      this.items = items.length ? items : undefined;
    });
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
