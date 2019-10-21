import { Component, OnInit } from '@angular/core';
import { interval, throwError, of } from 'rxjs';
import { mergeMap, retry, retryWhen, delay } from 'rxjs/operators';

@Component({
  selector: 'app-erros-operators',
  templateUrl: './erros-operators.component.html',
  styleUrls: ['./erros-operators.component.css']
})
export class ErrosOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.retry();
    this.retryWhen();
  }

  retry() {
    const observable = interval(500)
      .pipe(
        mergeMap((val) => {
          if (val > 3) {
            return throwError('error > 3');
          }
          return of(val);
        }),
        retry(2)
      );

    observable.subscribe(res => console.log('retry', res),
      err => console.log(err));
  }

  retryWhen() {
    const observable = interval(500)
      .pipe(
        mergeMap((val) => {
          if (val > 3) {
            // генерируем Observable ошибки
            return throwError('error > 3');
          }
          return of(val);
        }),
        retryWhen((errorObservable) => {
          return errorObservable.pipe(
            delay(2000)
          )
        })
      );
    observable.subscribe(res => console.log('retryWhen', res),
      err => console.log(err));
  }


}
