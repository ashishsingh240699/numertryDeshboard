import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  // current user koun login hai
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/currentUser`);
  }

  //Change Password
  public changePassword(changePasswordData:any){
    return this.http.put(`${baseUrl}/changePassword`,changePasswordData);
  }

  //generate token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //login user: set  token in local storage
  public loginUser(token:any){
    localStorage.setItem('token', token);
    return true;
  }

  //isLogin : user is logged or not
  public isLoggedIn(){
    let tokenStr= localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }
    else{
      return true;
    }
  }
   // remove token to local storage 
   public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    return true;
   }

   // get token agr token ki jarurt pd jaye kabhi
   public getToken(){
    return localStorage.getItem("token");
   }

   // set userDetail
   public setUser(user :any){
    localStorage.setItem('user',JSON.stringify(user));
   }

   //get user
   public getUser(){
    let userStr= localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
   }

   //get User role
   public getUserRole(){
    let user =this.getUser();
    return user.authorities[0].authority;
   }

}
