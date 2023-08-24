import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';

import { Router } from '@angular/router';

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

  constructor(private loginService:LoginService,private notificationService: NotificationService,private router:
    Router){

  }
  ngOnInit(): void {
    
  }
  onSubmit(){
   

    if((this.credentials.password!==''&& this.credentials.email!=='')
    &&this.credentials.password!=null&&this.credentials.email!=null){

      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
         console.log(response);
         this.loginService.loginUser(response.token,response.username);
         this.notificationService.showsuccess('login successfull');
        window.location.href="/dashboard";
       //this.router.navigate(['/dashboard']);
        },
        error=>{
          this.notificationService.showerror("Something Went Wrong");
          console.log(error);
        }
      )
      
    }else{
      console.log('Values are Required here');
      this.notificationService.showerror('Username and Password are required field');
    }
    
  }
  

}
