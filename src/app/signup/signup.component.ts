import { Component, OnInit } from '@angular/core';
import { SignupService , companydetails } from '../services/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
  

export class SignupComponent implements OnInit {
  compdet:companydetails;

  constructor() { }

  ngOnInit() {
  }

}
