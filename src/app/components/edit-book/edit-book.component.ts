import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import BookModel from '../../models/book.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit, OnChanges {

  @Input() header: string;
  @Input() editableBook: BookModel;
  @Input() isCreation: boolean;
  @Input() labelButton: string;
  @Input() message: string;
  @Input() isDisabled: boolean;
  @Output() onCompletedAddBook: EventEmitter<BookModel> = new EventEmitter<BookModel>(); 
  @Output() onCompletedChangeBook = new EventEmitter(); 

  book: BookModel; 
  bookform: FormGroup;
  isbnFilter: RegExp = /^[0-9]{1}[-]{1}[0-9]{3}[-]{1}[0-9]{5}[-]{1}[0-9]{0,1}$/

  constructor(
    private fb: FormBuilder, 
    private messageService: MessageService) {
      this.bookform = this.fb.group({
        'label': new FormControl('', Validators.required),
        'author': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required),
        'publishing': new FormControl('', Validators.required),
        'isbn': new FormControl('', Validators.required),
        'datePublishing': new FormControl('', Validators.required),
        'countPage': new FormControl(''),
        'note': new FormControl(''),
        'comment': new FormControl('')
    });
    }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isDisabled) {
      this.isDisabled = changes.isDisabled.currentValue;
      if (changes.isDisabled.currentValue)  {
        this.bookform.disable();
      } else {
        this.bookform.enable();
      }
    }

    if (changes.editableBook) {
      this.book = changes.editableBook.currentValue;
    }
  }

  ngOnInit() {
      this.book = this.editableBook || new BookModel();
      this.header = this.header;
  }

  onUploadImage(event) {
    this.book.poster = event.currentTarget.value;
  }

  handleRate(event) {
    this.book.rating = event.value;
  }

  onSubmit() {
    if (this.isCreation) {
      this.book.id = btoa(this.book.label);
      this.onCompletedAddBook.emit(this.book);
    }

    this.onCompletedChangeBook.emit(this.book);
    this.messageService.add({severity:'success', summary:'Success', detail: this.message});
  }
}
