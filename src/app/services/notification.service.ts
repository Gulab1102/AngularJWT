import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

 

  constructor(private toastr: ToastrService) { }

  showsuccess(msg:string){
    this.toastr.success(msg);
  }

  showerror(msg:string){
    this.toastr.error(msg);
  }

 
}
