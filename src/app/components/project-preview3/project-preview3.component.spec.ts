import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreview3Component } from './project-preview3.component';

describe('ProjectPreview3Component', () => {
  let component: ProjectPreview3Component;
  let fixture: ComponentFixture<ProjectPreview3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreview3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
