import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent {

 
  username:string="";
  password:string="";
  isvalid=false;
 constructor(private router :Router, private docauth:DocauthService){}
  checklogin(){
      if(this.docauth.authenticate(this.username,this.password))
      {
        
        this.router.navigate(['docdash']);
        this.isvalid=false;
       
        
      }

      else{
        alert("wrong credential");
          this.router.navigate(['doclogin']);
          this.isvalid=true;
      }
  }
}
