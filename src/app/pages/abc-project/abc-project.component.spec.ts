import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcProjectComponent } from './abc-project.component';

describe('AbcProjectComponent', () => {
  let component: AbcProjectComponent;
  let fixture: ComponentFixture<AbcProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
