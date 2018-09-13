import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewMakeupComponent } from './project-preview-makeup.component';

describe('ProjectPreviewMakeupComponent', () => {
  let component: ProjectPreviewMakeupComponent;
  let fixture: ComponentFixture<ProjectPreviewMakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreviewMakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreviewMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
