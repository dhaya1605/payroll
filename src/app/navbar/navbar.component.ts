import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }
   
  admindashboard()
  {
    this.router.navigate(['admindashboard'])
  }


  addemployee()
  {
    this.router.navigate(['addemployee'])
  }
  employeedetails()
  {
    this.router.navigate(['employeedetails'])
  }
  dailyattendance()
  {
    this.router.navigate(['dailyattendance'])
  }
  monthlyattendance()
  {
    this.router.navigate(['monthlyattendance'])
  }
  shiftschedule()
  {
    this.router.navigate(['shiftschedule'])
  }
  holiday()
  {
    this.router.navigate(['holiday'])
  }





  logout()
  {
    this.router.navigate([''])
  }

  ngOnInit() {
  }

}
