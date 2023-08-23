import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

 

  constructor(private toastr: ToastrService) { }

  showsuccess(){
    this.toastr.success("Added succussfully")
  }

  showerror(msg:string){
    this.toastr.error(msg);
  }

 
}
