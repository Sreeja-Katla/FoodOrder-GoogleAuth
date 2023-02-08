import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  UserLogin: string = 'false';

  images = ['../../assets/food.png', '../../assets/food.jpg', '../../assets/food1.jpg']
  @Input() navItem: any = false;

  constructor(private routing: Router,private loginService : LoginService){}
  
  ngOnInit(): void {
    localStorage.setItem("UserDet", this.UserLogin);
  }

  UserMail: string = '';
  Userpassword: string = '';
  data: any = null;
  @ViewChild('UserForm')
  form!: NgForm;

  userData: any;
  dataArray: [] = [];
  obj: any = {};




  getData(loginForm :NgForm) {

   console.log(loginForm.value);
   const token = this.loginService.AuthUser(loginForm.value);

   if(token){
    localStorage.setItem('token',token.email)
    alert("login successful");
    this.routing.navigate(["/menu"]);

   }
   else{
    alert("login not succesful");
   }


}

}

// const localData: any = localStorage.getItem('Array');
// console.log(localData);

// this.obj = JSON.parse(localData);
// console.log(this.obj);

// //Login data

// this.userData = this.form.value;
// console.log(this.form.value);
// console.log(this.userData);

// for (let x = 0; x < this.obj.length; x++) {

//   console.log(this.userData.userEmail);
//   console.log(this.obj[0].email);


//   if (this.userData.userEmail === this.obj[x].email && this.userData.userPassword === this.obj[x].password) {

//     alert("Login Successful");
//     this.UserLogin = 'true';
//     localStorage.setItem("UserDet", this.UserLogin);
//     this.routing.navigate(["/menu"]);
//     break;
//   }

//   else {
//     alert("login fails...")
//     console.log("login fails....");
//     this.UserLogin = 'false';
//     localStorage.setItem("UserDet", this.UserLogin);

//   }



// }
