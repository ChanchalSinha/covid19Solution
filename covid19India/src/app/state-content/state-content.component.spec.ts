import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateContentComponent } from './state-content.component';

describe('StateContentComponent', () => {
  let component: StateContentComponent;
  let fixture: ComponentFixture<StateContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
