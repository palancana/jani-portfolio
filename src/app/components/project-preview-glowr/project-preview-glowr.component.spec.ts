import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewGlowrComponent } from './project-preview-glowr.component';

describe('ProjectPreviewGlowrComponent', () => {
  let component: ProjectPreviewGlowrComponent;
  let fixture: ComponentFixture<ProjectPreviewGlowrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreviewGlowrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreviewGlowrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
