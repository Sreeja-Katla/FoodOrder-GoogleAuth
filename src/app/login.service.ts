import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

 
  AuthUser(user: any){

    let userArray=[];
  if(localStorage.getItem('Array')){

    userArray =JSON.parse(localStorage.getItem('Array'));
  }
return userArray.find(p=> p.email ===user.userEmail && p.password === user.userPassword);
}
 
}
