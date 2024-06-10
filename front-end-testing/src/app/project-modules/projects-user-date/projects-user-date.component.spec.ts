import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsUserDateComponent } from './projects-user-date.component';

describe('ProjectsUserDateComponent', () => {
  let component: ProjectsUserDateComponent;
  let fixture: ComponentFixture<ProjectsUserDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsUserDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsUserDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
