import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }


  public addReview(review:any){
    return this.http.post(`${baseUrl}/review/`,review)
  }
  public getReview(review:any){
    return this.http.get(`${baseUrl}/review/get`)
  }
  public deleteReview(id: any){
    return this.http.delete(`${baseUrl}/review/`+id)
  }

  public addQuery(query:any){
    return this.http.post(`${baseUrl}/query/`,query)
  }
  public getAllQuery(){
    return this.http.get(`${baseUrl}/query/get`)
  }
}
