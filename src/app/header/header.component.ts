import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {



  userLogin: {};
  googleAuth: string;
  googleData: any;
  imageupload: string;
  imageChangedEvent: {} = '';
  croppedImage: string = '';

  constructor(private modal_popup: NgbModal, private image_modal: NgbModal,private routing:Router) { }

  ngOnInit(): void {
    this.userLogin = localStorage.getItem("UserDet");
    console.log(this.userLogin);

    this.googleAuth = localStorage.getItem('GoogleArray')
    console.log(this.googleAuth);

    this.googleData = JSON.parse(this.googleAuth)
    //  console.log(this.googleData.email);

    this.imageupload = this.googleData.photoUrl

  }
  

  // LOGIN SUCCESSFUL
  logedIn(){
    return localStorage.getItem('token');
  }

  onLoggedOut(){
    // alert("hello")
    localStorage.removeItem('token');
    this.routing.navigate(["/home"])

  }












  // IMAGECROPPING
  detailsPopUp(modal: any) {

    this.modal_popup.open(modal);
  }

  fileChangeEvent(event: any, modal: any): void {

    this.image_modal.open(modal);
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
  uploadImage() {
    // alert("hello");
    this.imageupload = this.croppedImage;
    // console.log(this.croppedImage);

  }



}



