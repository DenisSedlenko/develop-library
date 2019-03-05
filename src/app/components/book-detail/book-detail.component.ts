import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { ModelDataService } from 'src/app/services/model-data.service';
import BookModel from 'src/app/models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  private id: string;
  private bookList: Array<BookModel>;
  private detailBook: BookModel;
  private isDisabledForChange = true;

  private activeRouteSubscription: Subscription;
  private booksSubscription: Subscription;

  isEditMode: boolean;
  labelButton: string = 'Сохранить изменения';
  headerPanel: string = 'Информация о книге';
  messageOnSuccessChange: string = 'Книга успешно изменена';
  
  constructor(
    private activateRoute: ActivatedRoute, 
    private breadcrumbService: BreadcrumbService,
    private modelDataService: ModelDataService 
    ) { }

  ngOnInit() {
    this.activeRouteSubscription = 
      this.activateRoute.params.subscribe(params => this.id = params['id']);

    this.booksSubscription = this.modelDataService.librarySubject$.subscribe( books => {
      this.bookList = books;
      this.detailBook = this.bookList.find(book => book.id === this.id);
      this.breadcrumbService.pushItemBreadcrumb({ label: this.detailBook.label, routerLink: `/detail/${this.id}`});
    })
  }

  ngOnDestroy() {
    this.activeRouteSubscription.unsubscribe();
    this.booksSubscription.unsubscribe();
  }

  onCompletedChangeBook(book: BookModel) {
    this.modelDataService.updateBook(book);
    this.isDisabledForChange = true;
    this.isEditMode = !this.isDisabledForChange;
  }

  handleChange(e) {
    this.isDisabledForChange = !e.checked;
  }
}
