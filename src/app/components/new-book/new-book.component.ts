import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Router } from '@angular/router';
import BookModel from 'src/app/models/book.model';
import { ModelDataService } from 'src/app/services/model-data.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  labelButton: string = 'Добавить книгу';
  headerPanel: string = 'Добавление новой книги';
  messageOnSuccessAddition: string = 'Книга успешно добавлена';

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private modelDataService: ModelDataService) { }

  ngOnInit() {
    this.breadcrumbService.pushItemBreadcrumb({label: 'Добавить книгу', routerLink: '/book'})
  }

  onCompletedAddBook(book: BookModel) {
    this.modelDataService.addNewBook(book);
    setTimeout(() => {
      this.router.navigate(['/board']);
    }, 1000);
  }
}
