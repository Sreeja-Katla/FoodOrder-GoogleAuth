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

export class RestaurentsComponent implements OnInit ,DoCheck{
  show = true;
  reactiveForm: FormGroup;
  form = NgForm;
  itemArray: any = [];
  ownerData: any = [];
  data: any;
  formData: any = [];
  cartItemData: any = [];
  itemDetail: any;
  obj: any = [];

  constructor(private modal_popup: NgbModal, private modal_popup1: NgbModal, private routing: Router, private cartService: CartServiceService) {
    this.reactiveForm = new FormGroup({

      name: new FormControl(null, Validators.required),
      imgUrl: new FormControl(null, Validators.required),
      image2: new FormControl(null, Validators.required),
      image3: new FormControl(null, Validators.required),
      // adress: new FormControl(null,[Validators.required]),
      price: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),


      adress: new FormArray([
        new FormControl(null, Validators.required),

      ])
    })
  }
  ngOnInit(){
    this.ownerData =localStorage.getItem('itemArray');
    this.obj=JSON.parse( this.ownerData);
    
    console.log(this.obj);
    
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
//   this.obj=JSON.parse( this.ownerData);
  
//   console.log(this.obj);
  
//  }

 myNewPro_Details:any=[]
 ngDoCheck(): void {
  // this.myNewPro_Details = this.cartService.addingItems
  // console.log("my new details",this.myNewPro_Details);
  this.ownerData =localStorage.getItem('itemArray');
    this.obj=JSON.parse( this.ownerData);
    
  
 }

addAdress(){

  (<FormArray>this.reactiveForm.get('adress')).push(new FormControl(null,Validators.required))
}

 ownerMenu(modal:any){
  this.show=true;
       this.modal_popup.open(modal);
  }
sreeja:any=[]
  onSubmit(){
    this.show=false;

  this.formData=this.reactiveForm.value
    // this.cartService.addItems(this.reactiveForm.value)
  console.log(this.formData);
  console.log(this.obj);
  if(this.obj !=null){
  this.obj.push(this.formData)
  }else{
    this.sreeja.push(this.formData)
    this.obj=this.sreeja
  }
  
    console.log(this.obj);
  
  localStorage.setItem("itemArray",JSON.stringify(this.obj))
  

 this.reactiveForm.reset();
  
  }
  
  onClose(){
   
    this.show=false;
  }

  ShowDetails(index:number,modal:any){
    // alert("hellow")
    this.show=true;
    this.modal_popup1.open(modal);
    this.itemDetail=this.obj[index]
}
deleteItem(item:any){
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