import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app-shell/app.component';
import { BreadcrumbMenuComponent } from './components/breadcrumb-menu/breadcrumb-menu.component';
import { BookBoardComponent } from './components/book-board/book-board.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { NewBookComponent } from './components/new-book/new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbMenuComponent,
    BookBoardComponent,
    BookDetailComponent,
    NewBookComponent
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
