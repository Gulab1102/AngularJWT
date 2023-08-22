import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost:8080';

  constructor(private http: HttpClient) { }

  generateToken(credentials:any){
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


getUser(token:any){
 let tokenstr='Bearer '+token;


  let headers=new HttpHeaders().set("Authorization",tokenstr);
  console.log(headers);
  return this.http.get("https://jwtauthentication-production.up.railway.app/test",{headers,responseType:'text' as 'json'});

}

}
