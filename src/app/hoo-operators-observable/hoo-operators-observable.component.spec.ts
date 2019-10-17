import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooOperatorsObservableComponent } from './hoo-operators-observable.component';

describe('HooOperatorsObservableComponent', () => {
  let component: HooOperatorsObservableComponent;
  let fixture: ComponentFixture<HooOperatorsObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooOperatorsObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooOperatorsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
