import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  
  username:string="";
  password:string="";
  invalidlogin=false;

   constructor(private router : Router,private adminauth:AdminauthService){}
  
    checklogin(){
      if(this.adminauth.authenticate(this.username,this.password))
      {
        this.router.navigate(['admin']);
       this.invalidlogin=false;
      }
      else{ 
         this.invalidlogin=true;
        alert("Wrong credential");
         this.router.navigate(['adlogin']);
        

      }
    }

}
