import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-viewbank',
  templateUrl: './viewbank.component.html',
  styleUrls: ['./viewbank.component.css']
})
export class ViewbankComponent {
bank:any
  constructor(private userService: UserServiceService,private _snackBar: MatSnackBar) { }
  ngOnInit():void{

    this.userService.getbank(this.bank).subscribe(
      (    Response: any)=>{
        console.log("hello",Response)
        this.bank= Response;
      },
      (    error: any)=>{
        console.log(error)
        this._snackBar.open("not registred","cancel")
      });
   
   
    }
  
  
    deleteBank(id:any){
      this.userService.deletebank(id).subscribe(
        (Response) =>{
          console.log("delete done",Response)
        },
        (error) =>{
          console.log(error);
        }
          )
        }
}
