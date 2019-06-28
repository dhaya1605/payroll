import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { SettingsComponent } from './settings/settings.component';
import { EmployeedashboradComponent } from './employeedashborad/employeedashborad.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { DailyattendanceComponent } from './dailyattendance/dailyattendance.component';
import { MonthlyattendanceComponent } from './monthlyattendance/monthlyattendance.component';
import { ShiftscheduleComponent } from './shiftschedule/shiftschedule.component';
import { HolidayComponent } from './holiday/holiday.component';
import { LeaveComponent } from './leave/leave.component';
import { EmpnavbarComponent } from './empnavbar/empnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AdmindashboardComponent,
    EmployeeComponent,
    SettingsComponent,
    EmployeedashboradComponent,
    AttendanceComponent,
    AddemployeeComponent,
    EmployeedetailsComponent,
    DailyattendanceComponent,
    MonthlyattendanceComponent,
    ShiftscheduleComponent,
    HolidayComponent,
    LeaveComponent,
    EmpnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
