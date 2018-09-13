import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallScrollDownComponent } from './small-scroll-down.component';

describe('SmallScrollDownComponent', () => {
  let component: SmallScrollDownComponent;
  let fixture: ComponentFixture<SmallScrollDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallScrollDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallScrollDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
