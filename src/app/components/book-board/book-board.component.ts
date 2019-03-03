import { Component, OnInit, OnDestroy } from '@angular/core';
import BookModel from '../../models/book.model';
import testData from '../../helpers/test-data.helper';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import ModelDataService from 'src/app/services/model-data.service';

@Component({
  selector: 'app-book-board',
  templateUrl: './book-board.component.html',
  styleUrls: ['./book-board.component.css']
})
export class BookBoardComponent implements OnInit, OnDestroy {

  bookList: Array<BookModel>;
  librarySubscription: Subscription;

  constructor(
    private router: Router,
    private modelDataService: ModelDataService) { }

  ngOnInit() {
    this.librarySubscription = this.modelDataService.librarySubject$.subscribe( books => {
      this.bookList = books;
    });
  }

  ngOnDestroy() {
    this.librarySubscription.unsubscribe();
  }

  onClickBook(id: string) {
    this.router.navigate(['/detail', id]);
  }

  onClickAddBook() {
    this.router.navigate(['/book']);
  } 
}
