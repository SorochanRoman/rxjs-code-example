import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { map, debounceTime, tap, switchMap, delay, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-live-search-example',
  templateUrl: './live-search-example.component.html',
  styleUrls: ['./live-search-example.component.css']
})
export class LiveSearchExampleComponent implements OnInit {

  @ViewChild('input', { static: true }) input: ElementRef;

  constructor() { }

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'input').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => console.log('start animation')),
      switchMap((value) => this.getData(value)),
    )
      .subscribe(res => console.log(res));
  }

  getData(text) {
    return of(`success ${text}`);
  }
}
