import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-breadcrumb-menu',
  templateUrl: './breadcrumb-menu.component.html',
  styleUrls: ['./breadcrumb-menu.component.css']
})
export class BreadcrumbMenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
    
  home: MenuItem;

  ngOnInit() {
    this.home = {icon: 'pi pi-home'};
  }

}
