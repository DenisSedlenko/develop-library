import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    BreadcrumbModule
  ],
  exports: [
    BreadcrumbModule,
    BrowserAnimationsModule
  ]
})

export class PrimengModule { }
