import { Component, Input } from '@angular/core';
import { TaskItem } from '../../Models/task';
import { NgClass } from '@angular/common';
import { DashboardProjectsComponent } from '../dashboard-projects/dashboard-projects.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: 
  [
    NgClass,
    DashboardProjectsComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input()
  item: TaskItem | undefined
}
