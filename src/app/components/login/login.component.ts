import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  credentials={
    email:'',
    password:''
  }

  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    
  }
  onSubmit(){
   

    if((this.credentials.password!=''&& this.credentials.email!='')
    &&this.credentials.password!=null&&this.credentials.email!=null){

      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
         console.log(response.token);
         this.loginService.loginUser(response.token);
         window.location.href="/dashboard";
        },
        error=>{
          console.log(error);
        }
      )
      
    }else{
      console.log('Values are Required here');
    }
    
  }
  

}
