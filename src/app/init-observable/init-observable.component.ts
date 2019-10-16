import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-init-observable',
  templateUrl: './init-observable.component.html',
  styleUrls: ['./init-observable.component.css']
})
export class InitObservableComponent implements OnInit {

  @ViewChild('clickButton', { static: true }) clickButton: ElementRef;

  constructor() { }

  ngOnInit() {
    this.manualCreate();
    this.manualWithEmitter();
    this.createByOf();
    this.createByFrom('abcd');
    this.createByFrom(['String 1', 'String 2', 'String 3']);

    const promise = new Promise((resolve, reject) => {
      resolve('i am from promise');
    });

    this.createByFrom(promise);
  }

  ngAfterViewInit(): void {
    this.createFromDomEvent(this.clickButton.nativeElement, 'click');
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

  manualWithEmitter() {
    let emitter;
    const observable = Observable.create(e => emitter = e);

    observable.subscribe(res => console.log('manualWithEvent', res));
    emitter.next('first');
    emitter.next('second');
    emitter.next('third');
    emitter.complete();
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

  createFromDomEvent(element, event) {
    const observable = fromEvent(element, event);
    observable.subscribe(res => console.log('createFromDomEvent', `${event} - ${res}`));
  }

}
