import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  changePasswordData = {
    username: '',
    currentPassword: '',
    newPassword: '',
  };

  constructor(private snack: MatSnackBar, private changePassword: LoginService) {
    let user = this.changePassword.getUser();
    this.changePasswordData.username = user.username;
  }

  changePasswordFormSubmit() {
    this.changePassword.changePassword(this.changePasswordData).subscribe(
      Response=>{
        console.log(Response);
        
      },error=>{
        console.log(error);
      }
    )

    if (this.changePasswordData.currentPassword.trim() == '' || this.changePasswordData.currentPassword == null) {
      this.snack.open('Password is required !!', '', {
        duration: 3000,
      });
      return;
    }
    if (this.changePasswordData.newPassword.trim() == '' || this.changePasswordData.newPassword == null) {
      this.snack.open('New Password is required !!', '', {
        duration: 3000
      });
      return;
    }
  
  }
}
