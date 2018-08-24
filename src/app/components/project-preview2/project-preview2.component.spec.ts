import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreview2Component } from './project-preview2.component';

describe('ProjectPreview2Component', () => {
  let component: ProjectPreview2Component;
  let fixture: ComponentFixture<ProjectPreview2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreview2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
