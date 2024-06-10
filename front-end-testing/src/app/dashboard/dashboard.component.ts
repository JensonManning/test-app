import { Component } from '@angular/core';
import { ProjectsOverviewComponent } from '../project-modules/projects-overview/projects-overview.component';
import { ProjectsUserDateComponent } from '../project-modules/projects-user-date/projects-user-date.component';
import { ProjectsActiveComponent } from '../project-modules/projects-active/projects-active.component';
import { ProjectsCalendarComponent } from '../project-modules/projects-calendar/projects-calendar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProjectsOverviewComponent,ProjectsUserDateComponent,ProjectsActiveComponent, ProjectsCalendarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
