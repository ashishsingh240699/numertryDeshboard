import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-quiery',
  templateUrl: './quiery.component.html',
  styleUrls: ['./quiery.component.css']
})
export class QuieryComponent {
  query={
    name:"",
    queryField:"",
  }
  constructor(private service:ReviewService,private snake:MatSnackBar){}
  sendQuery(){
    this.service.addQuery(this.query).subscribe(
      Response=>{
        console.log(Response);
        this.snake.open("Query Send Successful","ok")
      },error=>{
        console.log(error);
        this.snake.open("query not sned","cancel")
      }
    )

  }

}
