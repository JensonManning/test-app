import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsActiveComponent } from './projects-active.component';

describe('ProjectsActiveComponent', () => {
  let component: ProjectsActiveComponent;
  let fixture: ComponentFixture<ProjectsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsActiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
