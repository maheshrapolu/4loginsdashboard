import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { ManagerComponent } from './home/manager/manager.component';
import { TeamleadComponent } from './home/teamlead/teamlead.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { DashboardComponent } from './home/admin/dashboard/dashboard.component';
import { MandashboardComponent } from './home/manager/mandashboard/mandashboard.component';
import { TeamdashboardComponent } from './home/teamlead/teamdashboard/teamdashboard.component';
import { EmpdashboardComponent } from './home/employee/empdashboard/empdashboard.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'manager',component:ManagerComponent},
  {path:'mandashboard',component:MandashboardComponent},
  {path:'teamlead',component:TeamleadComponent},
  {path:'teamdashboard',component:TeamdashboardComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'empdashboard',component:EmpdashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
