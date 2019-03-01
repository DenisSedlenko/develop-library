import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    BreadcrumbModule,
    CardModule
  ],
  exports: [
    BreadcrumbModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule
  ]
})

export class PrimengModule { }
