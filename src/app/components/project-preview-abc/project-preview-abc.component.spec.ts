import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewAbcComponent } from './project-preview-abc.component';

describe('ProjectPreviewAbcComponent', () => {
  let component: ProjectPreviewAbcComponent;
  let fixture: ComponentFixture<ProjectPreviewAbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreviewAbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreviewAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
