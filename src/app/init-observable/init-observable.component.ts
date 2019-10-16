import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-init-observable',
  templateUrl: './init-observable.component.html',
  styleUrls: ['./init-observable.component.css']
})
export class InitObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.manualCreate();

  }

  manualCreate() {
    const observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    observable.subscribe(res => console.log('manualCreate', res));
  }


}
