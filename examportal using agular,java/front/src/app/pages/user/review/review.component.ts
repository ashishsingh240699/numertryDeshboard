import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
review={
  review_For:"",
  course:"",
  overall_Rating:"",
  is_publish:"",
}
  constructor(private service:ReviewService,private _snackBar: MatSnackBar){}
  reviewAdd(){
    this.service.addReview(this.review).subscribe(
      Response =>{
        console.log(Response);
        this._snackBar.open("review add sucessfully","ok")
      },error =>{
        console.log(error);
        this._snackBar.open("review not add","cancel")
      }
    )
  }

}
