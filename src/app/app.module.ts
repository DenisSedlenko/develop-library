import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-shell/app.component';
import { BreadcrumbMenuComponent } from './breadcrumb-menu/breadcrumb-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbMenuComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
