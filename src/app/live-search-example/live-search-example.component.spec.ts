import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSearchExampleComponent } from './live-search-example.component';

describe('LiveSearchExampleComponent', () => {
  let component: LiveSearchExampleComponent;
  let fixture: ComponentFixture<LiveSearchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveSearchExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
