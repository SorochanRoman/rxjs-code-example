import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.subject();
    // this.replaySubject();
    this.behaviorSubject();
  }

  subject() {
    const subject = new Subject();
    subject.next(1);
    const subscription1 = subject.subscribe(x => {
      console.log('Subject 1:', x);
    });
    subject.next(2);
    const subscription2 = subject.subscribe(x => {
      console.log('Subject 2:', x);
    });
    subject.next(3);
    subscription1.unsubscribe();
    subject.next(4);
  }

  replaySubject() {
    const subject = new ReplaySubject(2);
    subject.next(1);
    const subscription1 = subject.subscribe(x => {
      console.log('ReplaySubject 1:', x);
    });
    subject.next(2);
    subject.next(3);
    subject.next(4);

    const subscription2 = subject.subscribe(x => {
      console.log('ReplaySubject 2:', x);
    });
    subscription1.unsubscribe();
  }

  behaviorSubject() {
    const subject = new BehaviorSubject(2);
    subject.next(1);
    const subscription1 = subject.subscribe(x => {
      console.log('behaviorSubject 1:', x);
    });
    subject.next(2);
    subject.next(3);
    subject.next(4);

    const subscription2 = subject.subscribe(x => {
      console.log('behaviorSubject 2:', x);
    });
    subscription1.unsubscribe();
  }

}
