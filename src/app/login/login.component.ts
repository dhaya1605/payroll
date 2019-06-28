import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employeeId = ''
  password = ''
  message:string;
  type:string;

  constructor(private router : Router , private loginservice : LoginService) { }

  ngOnInit() {
  }

  CheckLogin()
  {
    this.loginservice.checkuserandpass(this.employeeId , this.password).subscribe(( data )=>
    {
      this.type = data;
      if(this.type == '1')
      {
        this.router.navigate(['admindashboard'])
      }else
      {
        this.message="Enter a valid email and password";
      }
      console.log(this.type);

    })
    this.router.navigate(['admindashboard'])
  }
}
