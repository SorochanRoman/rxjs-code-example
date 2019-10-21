import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosOperatorsComponent } from './erros-operators.component';

describe('ErrosOperatorsComponent', () => {
  let component: ErrosOperatorsComponent;
  let fixture: ComponentFixture<ErrosOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrosOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
