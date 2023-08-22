import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

token:any;
  constructor(private loginService:LoginService){
    
  }
  ngOnInit(): void {
   
  }

  getUser(){
    this.loginService.getUser().subscribe(
      (response:any)=>{
       console.log(response);
      // this.loginService.loginUser(response.token);
      
      },
      error=>{
        console.log(error+" Hello ");
      }
    )
  }

}
