import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  credentials={
    email:'',
    fullname:'',
    password:'',
    address:'',
    qualification:''
  };
  constructor(private loginService:LoginService){

  }
  

  onSubmit(){
this.loginService.doSignUp(this.credentials).subscribe(
  (response:any)=>{
   console.log(response.token);
   this.loginService.loginUser(response.token);
    window.location.href="/dashboard";
  },
  error=>{
    console.log(error);
  }
)
   
  }

}
