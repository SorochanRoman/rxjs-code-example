import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitObservableComponent } from './init-observable.component';

describe('InitObservableComponent', () => {
  let component: InitObservableComponent;
  let fixture: ComponentFixture<InitObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
