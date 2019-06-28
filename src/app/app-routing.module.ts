import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { EmployeedashboradComponent } from './employeedashborad/employeedashborad.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { DailyattendanceComponent } from './dailyattendance/dailyattendance.component';
import { MonthlyattendanceComponent } from './monthlyattendance/monthlyattendance.component';
import { ShiftscheduleComponent } from './shiftschedule/shiftschedule.component';
import { HolidayComponent } from './holiday/holiday.component';
import { EmpnavbarComponent } from './empnavbar/empnavbar.component';


const routes: Routes = [
  {path:'' , component: LoginComponent},
  {path:'navbar' , component: NavbarComponent},
  {path:'signup' , component: SignupComponent},
  {path:'admindashboard' , component : AdmindashboardComponent},
  {path : 'dailyattendance' , component: DailyattendanceComponent},
  {path: 'monthlyattendance' , component: MonthlyattendanceComponent},
  {path:'addemployee' , component: AddemployeeComponent},
  {path:'employeedetails' , component: EmployeedetailsComponent},
  {path:'shiftschedule' , component:ShiftscheduleComponent},
  {path:'holiday' , component:HolidayComponent},
  {path:'empnavbar' , component:EmpnavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
