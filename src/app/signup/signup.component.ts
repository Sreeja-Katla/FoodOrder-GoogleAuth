import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  title = 'AngularForms';
  DefaultCountry="India";
  FirstName:string="";
  LastName:string="";
  email:string="";
  Number!: number;
  country:string="";
  Gender:string="";
 Password:string="";
 RePassword:string="";

  defaltgen:string="Male"
  gender=[
    {id:"Male", value:"Male"},
    {id:"Femla", value:"Female"},
    {id:"Others", value:"Others"}
  ]
 
   @ViewChild('MyForm')
  form!: NgForm;
   data: any;
   dataArray:any=[];
   formData:any=[];

  onSubmit(){
    console.log("Form Submitted..!");
    console.log(this.form);

    this.FirstName=this.form.value.FirstName;
    this.LastName=this.form.value.LastName;
    this.email=this.form.value.email;
    this.Number=this.form.value.phoneNumber;
    this.country=this.form.value.country;
    this.Gender=this.form.value.gender;
    this.Password=this.form.value.password;
    this.RePassword=this.form.value.Repassword;

    this.formData =this.form.value;
    console.log(this.formData);

    this.dataArray.push(this.formData)
    console.log(this.dataArray);

    this.data=JSON.stringify(this.dataArray);
      console.log(this.data);
    
    localStorage.setItem('Array',this.data)
   
  
   const localData =localStorage.getItem('Array')
   console.log(localData);
   
   
    
   this.form.reset();
   
  }


}
