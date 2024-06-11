import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-dashboard-projects',
  standalone: true,
  imports:
    [
      HttpClientModule,
      NgFor,
      NgFor,
      FormsModule
    ],
  templateUrl: './dashboard-projects.component.html',
  styleUrl: './dashboard-projects.component.scss'
})
export class DashboardProjectsComponent implements OnInit {
  list_of_project: any[] = [];
  element_of_project: any =
    {
      id: 0,
      name: "",
      abbreviation: "",
      description: "",
      color: "",
    };
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.AllProjects();
  }
  AllProjects() {
    this.http.get("http://localhost:3000/api/project/all").subscribe((res: any) => {
      this.list_of_project = res.data;
    })
  }
  IsSaving()
  {
    this.http.post("http://localhost:3000/api/project", this.element_of_project).subscribe((res: any) =>{
      if(res.result)
        {
          alert(res.message);
          this.AllProjects();
        }
        else
        {
          alert(res.message)
        }
    })
  }
}
