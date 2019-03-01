import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  private id: number;
  private activeRouteSubscription: Subscription;
  
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouteSubscription = this.activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnDestroy() {
    this.activeRouteSubscription.unsubscribe();
  }
}
