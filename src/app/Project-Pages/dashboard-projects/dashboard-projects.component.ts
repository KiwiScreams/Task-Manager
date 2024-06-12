import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CdkDragDrop, CdkDragPlaceholder, CdkDragPreview, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { ProjectComponent } from '../project/project.component';
import { TaskItem } from '../../Models/task';

@Component({
  selector: 'app-dashboard-projects',
  standalone: true,
  imports:
    [
      HttpClientModule,
      NgFor,
      ProjectComponent,
      FormsModule,
      DragDropModule,
      CdkDrag,
      CdkDropList,
      CdkDropListGroup,
      CdkDragPlaceholder,
      CdkDragPreview
    ],
  templateUrl: './dashboard-projects.component.html',
  styleUrl: './dashboard-projects.component.scss'
})
export class DashboardProjectsComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit(): void
  {
    this.TODO = this.tasks.filter(item => item.status === 'ToDo');
    this.INPROGRESS = this.tasks.filter(item => item.status === 'In Progress');
    this.DONE = this.tasks.filter(item => item.status === 'Done');
  }
  TODO: TaskItem[] = [];
  INPROGRESS: TaskItem[] = [];
  DONE: TaskItem[] = [];

  tasks: TaskItem[] = [
    {
      name: "Easy project",
      abbr: "hello",
      desc: "Hello world it is",
      status: 'ToDo',
      complexity: 'Easy', 
      type: 'Task'
    },
    {
      name: "medium project",
      abbr: "hello",
      desc: "Hello world it is",
      status: 'In Progress',
      complexity: 'Medium', 
      type: 'Bug'
    },
    {
      name: "hard project",
      abbr: "hello",
      desc: "Hello world it is",
      status: 'Done',
      complexity: 'Hard', 
      type: 'Test'
    }
  ]
  drop(event: CdkDragDrop<TaskItem[]>){
    console.log(event);
    if(event.previousContainer === event.container)
    {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else
    {
      transferArrayItem
      (
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}