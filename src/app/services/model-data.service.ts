import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import BookModel from '../models/book.model';
import testData from '../helpers/test-data.helper';

@Injectable({
  providedIn: 'root',
})
export class ModelDataService {

  private books: Array<BookModel> = testData as Array<BookModel>;
  librarySubject$: BehaviorSubject<Array<BookModel>> = new BehaviorSubject<Array<BookModel>>(this.books);
  
  constructor() {}

  addNewBook(book: BookModel) {
    this.books.push(book);
    this.librarySubject$.next(this.books);
  }

  updateBook(book: BookModel) {
    const idx = this.books.findIndex((value) => value.id === book.id);
    if (idx !== -1) {
      this.books.splice(idx, 1, book);
      this.librarySubject$.next(this.books);
    }
  }
}