import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminauthService } from './adminauth.service';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate{

  constructor( private adminauthservice : AdminauthService,private router:Router) { }
  canActivate() {
     
    if(this.adminauthservice.isuserloggedin())
    {
      return true;
    }
    else{
     
      
   this.router.navigate(['adlogin']);
   return false;
    }
  }
}
