import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData ={
    username:'',
    password:'',
  };
  constructor(private snack: MatSnackBar, private login:LoginService){}

  formSubmit(){
    console.log("login form submit ")

    if(this.loginData.username.trim() == '' || this.loginData.username == null)
    {
      this.snack.open('User name require !!', '',{
        duration:3000, 
      });
      return;
    }
    if(this.loginData.password.trim() == '' || this.loginData.password == null)
    {
      this.snack.open('password is require !!', '',{
        duration:3000, 
      });
      return;
    }
    //request to server to generate token 
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        //login
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redireact admin or normal
            if(this.login.getUserRole()=="ADMIN"){
              //ADMIN DASHBOARD
              //rediect k liye
              window.location.href ='/admin';
            }else if(this.login.getUserRole()=="NORMAL"){
              //NOMARL USER
              //redirect k liye
              window.location.href ='/user-dashboard';
            }else{
              this.login.logout();
            }
            

          } );


      },
      (error)=>{
        console.log("erroe");
        console.log(error);
      }
    );

  }

}
