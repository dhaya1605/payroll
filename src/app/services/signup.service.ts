import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class companydetails{
  constructor(
    public comapanyname : string,
    public companyid : string,
    public registerid:number,
    public tan:string,
    public pan:string,
    public gst:number,
    public password:string,
    public address:string,
    public state:string,
    public country:string,
    public contact:number,
    public pincode:number
  ){}
}

export class SignupService {

  constructor() { }
}
