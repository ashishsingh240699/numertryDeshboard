import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  uploadFile(file:any) {
    let formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${baseUrl}/file/upload`, formData);
  }
}
