import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { ManagerComponent } from './home/manager/manager.component';
import { TeamleadComponent } from './home/teamlead/teamlead.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './home/admin/dashboard/dashboard.component';
import { EmpdashboardComponent } from './home/employee/empdashboard/empdashboard.component';
import { MandashboardComponent } from './home/manager/mandashboard/mandashboard.component';
import { TeamdashboardComponent } from './home/teamlead/teamdashboard/teamdashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ManagerComponent,
    TeamleadComponent,
    EmployeeComponent,
    DashboardComponent,
    EmpdashboardComponent,
    MandashboardComponent,
    TeamdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
