import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor( private login:LoginService, private router:Router) {
    // Your constructor logic here
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Your canActivate logic here
    if(this.login.isLoggedIn() && this.login.getUserRole()=='ADMIN' ){
      return true;
    }
    this.router.navigate(['login']);
    return false; // Or false based on your conditions
  }
}

