import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cashbank',
  templateUrl: './cashbank.component.html',
  styleUrls: ['./cashbank.component.css']
})
export class CashbankComponent {
  constructor(private userService: UserServiceService,private _snackBar: MatSnackBar) { }
  
  bank={
    bankName:"",
    accountHolderName:"",
    accountNumber:"",
    ifscCode:"",
    upiId:""
  }

  bankAdd(){
    console.log("submit form");
    console.log("data" ,this.bank);
    this.userService.addBank(this.bank).subscribe(
      (      response: any)=>{
        console.log(response)
        this._snackBar.open("Bank details sucessfully","ok")
      },
      (      error: any) =>{
        console.log(error)
        this._snackBar.open("not regis bank","cancel")
      }
      
      
    )
  }
}
