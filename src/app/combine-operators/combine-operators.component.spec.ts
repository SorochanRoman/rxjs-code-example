import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineOperatorsComponent } from './combine-operators.component';

describe('CombineOperatorsComponent', () => {
  let component: CombineOperatorsComponent;
  let fixture: ComponentFixture<CombineOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
