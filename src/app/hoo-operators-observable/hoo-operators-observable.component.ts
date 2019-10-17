import { Component, OnInit } from '@angular/core';
import { timer, of } from 'rxjs';
import { mapTo, map, mergeAll, mergeMap, concatAll, switchAll, switchMap, exhaust } from 'rxjs/operators';

@Component({
  selector: 'app-hoo-operators-observable',
  templateUrl: './hoo-operators-observable.component.html',
  styleUrls: ['./hoo-operators-observable.component.css']
})
export class HooOperatorsObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.mergeAll();
    // this.mergeMap();
    // this.concatAll();
    // this.switchAll();
    // this.switchMap();
    // this.exhaust();

  }

  mergeAll() {
    timer(0, 1000).pipe(
      map(() => this.fakeRequest()),
      mergeAll()
    ).subscribe(res => console.log('mergeAll', res));
  }

  mergeMap() {
    timer(0, 1000).pipe(
      mergeMap(() => this.fakeRequest())
    ).subscribe(res => console.log('mergeMap', res));
  }

  concatAll() {
    const firstObservable = timer(1000).pipe(
      mapTo(1)
    );
    const secondObservable = timer(500).pipe(
      mapTo(2)
    );
    of(
      firstObservable,
      secondObservable
    ).pipe(
      concatAll()
    ).subscribe(res => console.log('concatAll', res));
  }

  switchAll() {
    const firstObservable = timer(1000).pipe(
      mapTo(1)
    );
    const secondObservable = timer(500).pipe(
      mapTo(2)
    );

    of(
      firstObservable,
      secondObservable
    ).pipe(
      switchAll()
    ).subscribe(res => console.log('switchAll', res));
  }

  switchMap() {
    const firstObservable = timer(1000).pipe(
      mapTo(1)
    );
    const secondObservable = timer(500).pipe(
      mapTo(2)
    );
    const thirdObservable = timer(500).pipe(
      mapTo(3)
    );
    of(
      firstObservable,
      secondObservable
    ).pipe(
      switchMap(() => thirdObservable)
    ).subscribe(res => console.log('switchMap', res));
  }

  exhaust() {
    const firstObservable = timer(1000).pipe(
      mapTo(1)
    );
    const secondObservable = timer(500).pipe(
      mapTo(2)
    );

    of(
      firstObservable,
      secondObservable
    ).pipe(
      exhaust()
    ).subscribe(res => console.log('exhaust', res));
  }

  fakeRequest() {
    return timer(700).pipe(
      mapTo('i am response')
    )
  }
}
