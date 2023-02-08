
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { foods } from './models/food';

// import { Cart } from './models/cart';

// import { CartItem } from './models/cartItms';

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {
cartDataList:any=[];
item1={};
totalPrice:number=0;

addToCart(item:any){
   console.log(item);
   this.cartDataList.push(item);
   console.log(this.cartDataList); 
}

removeCartData(product:any){

  this.cartDataList.map((a:any,index:any)=>{
    console.log(product.id);
    console.log(a.id);
    
    if(product.id==a.id){
      this.cartDataList.splice(index,1)
    }
  })
}

getTotalPrice(){

  let grandTotal =0;
  this.cartDataList.map((a:any)=>{
    grandTotal +=a.total;
  })
}

addingItems:any=[]
additems(myObj:object){
  this.addingItems.push(myObj)
}
  
    
  }
  
  




  // private cart :Cart=new Cart();
   
  // addToCart(food:foods):void{
  //   let cartItem = this.cart.items.find(item => item.food.id === food.id)
  //   if(cartItem){
  //     this.changeQuantity(food.id , cartItem.quantity +1)
  //     return;
  //   }  
  //  this.cart.items.push(new CartItem(food));
  // } 
  
  // removeFromCart(foodId:number):void{
  //   this.cart.items = this.cart.items.filter(item =>item.food.id != foodId)
  // }
  
  // changeQuantity(quantity:number , foodId:number){
  //   let cartItem = this.cart.items.find(item => item.food.id === foodId);
  //   if(!cartItem) return;
  //   cartItem.quantity = quantity;
  // }
  // getCart():Cart{
  //    return this.cart;
  // }



 
       
  
  
  