import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton, MatAnchor } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Project-Pages/header/header.component';
import { FooterComponent } from './Project-Pages/footer/footer.component';
import { DashboardProjectsComponent } from './Project-Pages/dashboard-projects/dashboard-projects.component';
import { LoginComponent } from './Project-Pages/login/login.component';
import { SignupComponent } from './Project-Pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      RouterOutlet,
      MatButton,
      MatAnchor,
      FormsModule,
      HeaderComponent,
      FooterComponent,
      LoginComponent,
      SignupComponent,
      DashboardProjectsComponent,
      ReactiveFormsModule,
      CommonModule,
      DragDropModule,
      CdkDrag,
      CdkDropList,
      CdkDropListGroup
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent
{
  title = 'TaskManager';
}
