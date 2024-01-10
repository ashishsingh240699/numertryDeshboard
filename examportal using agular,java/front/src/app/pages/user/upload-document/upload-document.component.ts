import { Component } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent {
  file: any;
  
 
  constructor(private service:FileService){}
  
  onFileSelected(event: any){
   this.file = event.target.files[0];
   console.log(this.file);
    // this.uploadFile(file);
    // console.log( this.uploadFile(file));
  }
 
 
 
  dataUpload(){
    this.service.uploadFile(this.file).subscribe(
      (response:any) => {
        console.log('File uploaded successfully', response);
      },
      (error:any) => {
        console.error('Error uploading file', error);
      }
    );
  }

}
