import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule} from '@angular/forms'

import {MatInputModule} from '@angular/material/input';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthIntercepterService } from './services/auth-intercepter.service';
import { LoginService } from './services/login.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SignupComponent } from './components/signup/signup.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ToastrModule} from 'ngx-toastr'




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
  positionClass: "toast-top-right"
    })
  ],
  providers: [LoginService,AuthGuardService,{ provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterService, multi: true }],
  bootstrap: [AppComponent]

})
export class AppModule { }
