import { Routes } from '@angular/router';
import { HeaderComponent } from './Project-Pages/header/header.component';
import { DashboardComponent } from './Project-Pages/dashboard/dashboard.component';
import { DashboardProjectsComponent } from './Project-Pages/dashboard-projects/dashboard-projects.component';
import { FooterComponent } from './Project-Pages/footer/footer.component';
import { LoginComponent } from './Project-Pages/login/login.component';
import { SignupComponent } from './Project-Pages/signup/signup.component';
import { UserDetailComponent } from './Project-Pages/user-detail/user-detail.component';
export const routes: Routes =
    [
        {
            path: '',
            component: LoginComponent
        },
        {
            path: 'signup',
            component: SignupComponent
        },
        {
            path: 'header',
            component: HeaderComponent,
            children:
                [
                    {
                        path: 'profile',
                        component: UserDetailComponent
                    },
                    {
                        path: 'dashboard-projects',
                        component: DashboardProjectsComponent
                    },
                    {
                        path: 'dashboard',
                        component: DashboardComponent
                    }
                ]
        },
        {
            path: 'footer',
            component: FooterComponent
        }
    ];