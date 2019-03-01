import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookBoardComponent } from './components/book-board/book-board.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { NewBookComponent } from './components/new-book/new-book.component';

const routes: Routes = [
  { path: "board", component: BookBoardComponent },
  {
    path: "detail/:id",
    component: BookDetailComponent
  },
  {
    path: "book",
    component: NewBookComponent
  },
  { path: "**", redirectTo: "board" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
