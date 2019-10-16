import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-init-observable',
  templateUrl: './init-observable.component.html',
  styleUrls: ['./init-observable.component.css']
})
export class InitObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.manualCreate();
    this.createByOf();
    this.createByFrom('abcd');
    this.createByFrom(['String 1', 'String 2', 'String 3']);

    const promise = new Promise((resolve, reject) => {
      resolve('i am from promise');
    });
    this.createByFrom(promise);


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

  createByOf() {
    const observable = of(1, 2);
    observable.subscribe(res => console.log('createByOf', res));
  }

  createByFrom(iterable) {
    const observable = from(iterable);
    console.log(`%ccreateByFrom ${iterable}`, 'background: #222; color: #bada55')
    observable.subscribe(res => console.log(`%c${res}`, 'margin-left: 30px'));
  }

}
