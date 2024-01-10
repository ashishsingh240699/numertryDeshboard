import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserServiceService,private _snackBar: MatSnackBar) { }
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  ngOnInit(): void {

  }
  formSubmit() {
    console.log(this.user);
    if (this.user.username == null || this.user.username == '') {
      // alert("enter the Username");
      this._snackBar.open("username is require !! ",'ok',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      })
      return;
    }

    //adduser : usewrservice se aa rha hai
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        // alert("success");
        Swal.fire("Success",'User Registered','success')
      },
      (error) => {
        console.log(error);
        alert("something worng");
      }
    )
  }
}



