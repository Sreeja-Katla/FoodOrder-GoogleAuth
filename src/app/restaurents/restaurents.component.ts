import { Component, OnInit,DoCheck } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

 
@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.css']
})

export class RestaurentsComponent implements OnInit,DoCheck{
     show=true;
     reactiveForm: FormGroup;
     form=NgForm;
     itemArray:any=[];
     ownerData:any=[];
     data:any;
     formData:any={};
     cartItemData:any=[];
     itemDetail:any;
     arrayItem=[];
   

 constructor(private modal_popup:NgbModal,private modal_popup1:NgbModal,private routing:Router,private cartService:CartServiceService){

  this.reactiveForm = new FormGroup({

    itemname : new FormControl(null,Validators.required),
    image : new FormControl(null,Validators.required),
    image2 : new FormControl(null,Validators.required),
    image3 : new FormControl(null,Validators.required),
    // adress: new FormControl(null,[Validators.required]),
     price : new FormControl(null,Validators.required),

    adress :new FormArray([
      new FormControl(null,Validators.required),
      
     ])
  })
 }
//  ngOnInit(){
  ngOnInit(){
    this.ownerData =localStorage.getItem('itemArray');
    console.log(this.ownerData);
    
    this.arrayItem=JSON.parse( this.ownerData);
    
    console.log(this.arrayItem);
    
   }
 

 myNewPro_Details:any=[]
 ngDoCheck(): void {
  this.myNewPro_Details = this.cartService.addingItems
  console.log("my new details",this.myNewPro_Details);
  
 }

addAdress(){

  (<FormArray>this.reactiveForm.get('adress')).push(new FormControl(null,Validators.required))
}

 ownerMenu(modal:any){
  this.show=true;
       this.modal_popup.open(modal);
  }

  onSubmit(){
    alert("hello");
    this.show=false;
    console.log("submitted...");
    console.log(this.reactiveForm.value);

  // this.formData=this.reactiveForm.value
   
  // console.log(this.formData);
 
 this.arrayItem.push(this.reactiveForm.value);
 
  localStorage.setItem("itemArray",JSON.stringify(this.arrayItem))
  

 this.reactiveForm.reset();


  }
  
  onClose(){
   
    this.show=false;
  }

  ShowDetails(index:number,modal:any){
    // alert("hellow")
    this.show=true;
    this.modal_popup1.open(modal);
    this.itemDetail=this.arrayItem[index]
}
deleteItem(){
  alert("delete item");

}

onOrder(itemDetail:any){
 this.show=false;
    console.log("hello");
    this.routing.navigate(["/cart"]);
    this.cartService.addToCart(itemDetail)
   alert("hello");
}
  
}




  // this.reactiveForm = new FormGroup({

  //   itemname : new FormControl(null,Validators.required),
  //   image : new FormControl(null,Validators.required),
  //   image2 : new FormControl(null,Validators.required),
  //   image3 : new FormControl(null,Validators.required),
  //   // adress: new FormControl(null,[Validators.required]),
  //    price : new FormControl(null,Validators.required),

  //   adress :new FormArray([
  //     new FormControl(null,Validators.required),
      
  //    ])
  // })

  // this.cartItemData=this.cartService.itemArray;
  // console.log(this.cartItemData);
  
// console.log(this.itemArray);
     
//   this.ownerData =localStorage.getItem('itemArray');
//   this.arrayItem=JSON.parse( this.ownerData);
  
//   console.log(this.obj);
  
//  }






  // this.cartService.additems(this.formData)
  
    // this.cartItemData=this.cartService.itemArray;
    // console.log(this.cartItemData);

//   this.itemArray.push(this.formData);
//     console.log(this.itemArray);


//   this.data=JSON.stringify(this.itemArray);
//       console.log(this.data);
    
//     localStorage.setItem('itemArray',this.data)

   
// this.ownerData =localStorage.getItem("itemArray");
//  this.obj=JSON.parse( this.ownerData);

//  console.log(this.obj);
 
//  console.log(this.ownerData);