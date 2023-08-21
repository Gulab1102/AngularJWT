import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://jwtauthentication-production.up.railway.app';

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

}
