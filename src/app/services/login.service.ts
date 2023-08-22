import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost:8080';

  constructor(private http: HttpClient) { }

  generateToken(credentials:any){
    return this.http.post(this.url+'/auth/login',credentials);

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
  return this.http.get(this.url+'/auth/test');

}

doSignUp(credentials:any){

  const headers = { 'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}  
    const body=JSON.stringify(credentials);
    console.log(body)
    return this.http.post(this.url+'/auth/register',credentials,{'headers':headers});
}

}
