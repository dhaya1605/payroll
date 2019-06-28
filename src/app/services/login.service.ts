import { Injectable } from '@angular/core';
import { HttpClientModule ,HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor( private http:HttpClient) { }

  checkuserandpass(employeeId:string , password:string)
  {
    return this.http.get<string>('http://localhost:4201/userAccount/checkuser?employeeId=' + employeeId+'&password='+password);

  }
   
  }
