import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 // username='';

 // url='http://localhost:8080';

  url='https://jwtauthentication-production.up.railway.app';

  constructor(private http: HttpClient) { }

  generateToken(credentials:any){
    return this.http.post(this.url+'/auth/login',credentials);

  }

  loginUser(token:any,username:any){
  //  this.username=username;
  localStorage.setItem('username',username);
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
  return this.http.post(this.url+'/auth/test','');

}

doSignUp(credentials:any){
    return this.http.post(this.url+'/auth/register',credentials);
}

}
