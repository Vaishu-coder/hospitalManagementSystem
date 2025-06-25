import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {
    username:string="";
  password:string="";
  constructor() { }
  
    authenticate(username:string,password:string){
          
      if(username=="nirmitee" && password=="123")
      {
         sessionStorage.setItem('username',username);
         return true;
      }
         
      else
      {
        alert("Wrong credential");
        return false;
      }
    } 

    isuserloggedin(){
      console.log(" doctor login hua");
      
      let user =sessionStorage.getItem('username');

      return !(user==null);
    }


    logout(){
       
      console.log("doctor logout hua");
      
      sessionStorage.removeItem('username');
    }
}   
