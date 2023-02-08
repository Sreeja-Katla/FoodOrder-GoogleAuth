import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.css']
})
export class ImageCropComponent implements OnInit {


  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageupload: any='';
  googleAuth:any;
  googleData:any;
  
  constructor(private modal_popup:NgbModal){}
  ngOnInit(): void {
   
    this.googleAuth =localStorage.getItem('GoogleArray')
    console.log(this.googleAuth);

   this.googleData=JSON.parse(this.googleAuth)
   console.log(this.googleData.email);

   this.imageupload= this.googleData.photoUrl
  }
  

  fileChangeEvent(event: any,modal:any): void {

    this.modal_popup.open(modal);
      this.imageChangedEvent = event;
      console.log(this.imageChangedEvent);
      
  }
  imageCropped(event: ImageCroppedEvent) {

      this.croppedImage = event.base64;
      console.log(this.croppedImage);
      
  }
  imgLoad() {
     // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  uploadImage(){
    // alert("hello");
    this.imageupload=this.croppedImage;
    // console.log(this.croppedImage);
    
  }
}
