import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { map, filter, debounceTime, take, delay, scan } from 'rxjs/operators';


@Component({
  selector: 'app-operators-observable',
  templateUrl: './operators-observable.component.html',
  styleUrls: ['./operators-observable.component.css']
})
export class OperatorsObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.operators();
  }


  operators() {
    const timer = interval(500);

    timer.pipe(
      delay(100),
      map(item => item * 3),
      filter(value => value % 2 === 0),
      scan((accumulator, time) => accumulator + time),
      take(10)
    ).subscribe(res => console.log(res));
  }
}
