import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCalendarComponent } from './projects-calendar.component';

describe('ProjectsCalendarComponent', () => {
  let component: ProjectsCalendarComponent;
  let fixture: ComponentFixture<ProjectsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
