import { switchMap, takeUntil } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, } from 'rxjs';

@Component({
  selector: 'app-drag-event',
  templateUrl: './drag-event.component.html',
  styleUrls: ['./drag-event.component.css']
})
export class DragEventComponent implements OnInit {

  @ViewChild('drag', { static: true }) drag: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const dragMouseDownEvents$ = fromEvent(this.drag.nativeElement, 'mousedown');
    const documentMouseMoveEvents$ = fromEvent(document, 'mousemove');
    const documentMouseUpEvents$ = fromEvent(document, 'mouseup');

    dragMouseDownEvents$.pipe(
      switchMap(() => documentMouseMoveEvents$.pipe(
        takeUntil(documentMouseUpEvents$)
      ))
    ).subscribe((e: any) => {
      console.log(e);
    });

  }

}
