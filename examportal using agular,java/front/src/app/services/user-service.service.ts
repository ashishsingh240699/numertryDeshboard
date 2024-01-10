import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`,user)

  }
  public addBank(bank:any){
    return this.http.post(`${baseUrl}/bank/`,bank)
  }

  getbank(bank:any){
    return this.http.get(`${baseUrl}/bank/get`)
   }
   findbankById(id:any){
    return this.http.get(`${baseUrl}/bank/`+id)
   }
  
   deletebank(id:any){
    return this.http.delete(`${baseUrl}/bank/`+id)
   }
  
  //  updateReg(bank,id){
  //   return this.http.put(`${baseUrl}bank/update/`+id,bank)
  //  }

}
