import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent {

  user:any;
  loggedIn: {};
  GoogleDataArray:[]=[];
  data:any;
  formData:[]=[];
  userDetails:any;

  constructor(private authService: SocialAuthService,private routing:Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
       console.log(this.user.email); 
    
    this.data=JSON.stringify(this.user);
      // console.log(this.data);
    
    localStorage.setItem("GoogleArray",this.data);

      this.userDetails= JSON.parse(localStorage.getItem('Array'));
      console.log(this.userDetails[0].email);
      

      for (let i=0; i < this.userDetails.length; i++) {
       if(this.user.email===this.userDetails[i].email){

        localStorage.setItem('token',user.email)
        this.routing.navigate(["/menu"]);
       }
       else{
        // alert("not successful")
       }
      }
      // console.log(this.userDetails[0]);
      

    });
  }
  
  }

 
