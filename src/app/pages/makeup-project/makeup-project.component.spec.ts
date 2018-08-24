import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupProjectComponent } from './makeup-project.component';

describe('MakeupProjectComponent', () => {
  let component: MakeupProjectComponent;
  let fixture: ComponentFixture<MakeupProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
