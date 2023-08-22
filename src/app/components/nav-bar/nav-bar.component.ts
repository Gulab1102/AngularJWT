import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isloggedin=false;

  constructor(private loginservice:LoginService){

  }
  ngOnInit(): void {
   this.isloggedin=this.loginservice.isLoggedIn();
  }
  onClick(){
    window.location.href="/login";
  }
  logout(){
    this.loginservice.logout();
    location.reload();
  }

}
