import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';

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
  constructor(private loginService:LoginService,private router:
     Router,private notificationService: NotificationService, private toastr: ToastrService
    ){

  }
  

  onSubmit(){
this.loginService.doSignUp(this.credentials).subscribe(
  (response:any)=>{
   console.log(response);
   //this.router.navigate()
 //  this.loginService.loginUser(response.token);
  //  window.location.href="/dashboard";
  //this.router.navigate(['login']);
  if(response.myresponse==='Registered successfully !!'){
    this.notificationService.showsuccess();
    this.router.navigate(['login']);
  }
  else this.notificationService.showerror(response.myresponse);
  
  
  },
  error=>{
    this.notificationService.showerror(error);
    console.log(error);
  }
)
   
  }

}
