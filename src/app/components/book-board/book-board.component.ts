import { Component, OnInit, OnDestroy } from '@angular/core';
import BookModel from '../../models/book.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModelDataService } from 'src/app/services/model-data.service';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

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
    private modelDataService: ModelDataService,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.librarySubscription = this.modelDataService.librarySubject$.subscribe( books => {
      this.bookList = books;
    });

    this.breadcrumbService.clearBreadcrumb();
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
