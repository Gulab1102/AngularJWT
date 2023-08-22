import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://jwtauthentication-production.up.railway.app';

  constructor(private http: HttpClient) { }

  generateToken(credentials:any){
    debugger
    return this.http.post('https://jwtauthentication-production.up.railway.app/auth/login',credentials);

  }

  loginUser(token:any){
    localStorage.setItem("token",token);
  }

  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined||token==''||token==null)
    return false;
  else
     return true;
  }
logout(){
  localStorage.removeItem('token');
  return true;
}
getToken(){
  return localStorage.getItem('token');
}

// stn:any
// stn='Bearer '+localStorage.getItem("token"); stn: '';


getUser(){
  debugger
  return this.http.get(this.url+'/test');

}

}
