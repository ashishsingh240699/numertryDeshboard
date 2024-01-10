import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent {
 
 
  constructor(private Service: ReviewService,private _snackBar: MatSnackBar) { }
  review: any;
  ngOnInit():void{

    this.Service.getReview(this.review).subscribe(
      Response=>{
        console.log(Response);
        this.review=Response;
      },error=>{
        console.log(error);
      }
      
    ) 
    }
  
  
    deleteReview(id:any){
      this.Service.deleteReview(id).subscribe(
        (Response) =>{
          console.log("delete done",Response)
          
        },
        (error) =>{
          console.log(error);
        }
          )
        }
}
