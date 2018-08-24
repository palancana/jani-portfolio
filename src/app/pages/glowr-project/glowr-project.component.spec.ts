import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowrProjectComponent } from './glowr-project.component';

describe('GlowrProjectComponent', () => {
  let component: GlowrProjectComponent;
  let fixture: ComponentFixture<GlowrProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowrProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowrProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
