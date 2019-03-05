import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChanges, 
  ElementRef, 
  ViewChild 
} from '@angular/core';
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
  heightOverlay: number;
  widthOverlay: number;

  bookform: FormGroup;
  isbnFilter: RegExp = /^[0-9]{1}[-]{1}[0-9]{3}[-]{1}[0-9]{5}[-]{1}[0-9]{0,1}$/

  @ViewChild('uploadImage') 
  uploadImage: ElementRef;

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
  }

  ngOnInit() {
    this.book = this.editableBook || new BookModel();
  }

  onUploadImage(event) {
    const image = event.target.files[0];
    let fr = new FileReader();
    fr.onload = () => { 
      this.book.poster = fr.result as string;
    };

    fr.readAsDataURL(image);

    this.uploadImage.nativeElement.value = '';
  }

  handleRate(event) {
    this.book.rating = event.value;
  }

  onSubmit() {
    this.book.id = this.book.id || btoa(encodeURIComponent(this.book.label).replace(/%([0-9A-F]{2})/g, 
      (match, p1) => String.fromCharCode(parseInt(p1, 16))));

    if (this.isCreation) { 
      this.onCompletedAddBook.emit(this.book);
    } else {
      this.onCompletedChangeBook.emit(this.book);
    }

    this.messageService.add({severity:'success', summary:'Успешно', detail: this.message});
  }
}
