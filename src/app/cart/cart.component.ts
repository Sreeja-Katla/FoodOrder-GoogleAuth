import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
// import { Cart } from '../models/cart';
// import { CartItem } from '../models/cartItems';
import { foods } from '../models/food';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   cartItem=[];
    // quantity:number=1;
   
    data:string;
      
   constructor(private cartService:CartServiceService,private routing:Router){}

  ngOnInit(): void {

    this.cartItem=this.cartService.cartDataList;
    console.log(this.cartItem);
    this.localData();
     this.totalPrice();

     this.invokeStripe();
  }

  onOrder(){
    console.log("hello");
    this.routing.navigate(["/menu"]);
  }
  

   localData(){
    this.data=JSON.stringify(this.cartItem);
    console.log(this.data);
    localStorage.setItem('cartData',this.data);
   }

  removeItem(item:{}){
  this.cartService.removeCartData(item);
  this.localData();
  this.totalPrice();
  console.log(item);
  alert("hello");
  
  }

  
  //DECREMENT
  dec(quantity: number,id:number){
    for(let i=0; i<this.cartItem.length;i++){

      if(this.cartItem[i].id  === id){
   this.cartItem[i].quantity = quantity - 1;
  }
    }
  localStorage.setItem('cartData', JSON.stringify(this.cartItem));
  this.localData();
  this.totalPrice();
  }

//INCREMENT
inc(quantity: number,id:number){
  for(let i=0; i<this.cartItem.length;i++){
    if(this.cartItem[i].id  === id){
 this.cartItem[i].quantity = quantity + 1;
}
  }
localStorage.setItem('cartData', JSON.stringify(this.cartItem));
this.localData();
this.totalPrice();
}


shopMore(){
    this.routing.navigate(["/menu"]);
}

  total:number=0;
  cartItem1:string;

  totalPrice(){

    if(localStorage.getItem('cartData')){
      this.cartItem1=localStorage.getItem('cartData');
      console.log(this.cartItem1);
      let data1 = JSON.parse(this.cartItem1)
      this.total = data1.reduce(function(acc: any, val: { price: number; quantity: number; }){
        return acc+(val.price * val.quantity)
      }, 0);
      alert(this.total)
      console.log(this.total);

       

      localStorage.setItem("totalAmount",JSON.stringify(this.total))
      
    }
  }

  removeAll(){
    alert("Remove All Items")
    this.cartItem=[];
    this.localData();
    this.totalPrice();
    console.log(this.cartItem);
  }
  buyNow(){
    this.routing.navigate(["/PaymentImplement"])
  }




  paymentHandler: any = null;
  
  
 
  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MWvBSSFWDQYkXrRvVj5w2LMetkgSyvTBAmuuVs5gWisDF2X6F6cbpBafSs1JhqWkQWKKoGOr00vs3qWfnU6P7M800FT9m9SWc',
      locale: 'auto',
      token: function (stripeToken: {}) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MWvBSSFWDQYkXrRvVj5w2LMetkgSyvTBAmuuVs5gWisDF2X6F6cbpBafSs1JhqWkQWKKoGOr00vs3qWfnU6P7M800FT9m9SWc',
          locale: 'auto',
          token: function (stripeToken: {}) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }


}

  









 
// cart!: Cart;
// constructor(private routing:Router,private cartService: CartServiceService){}

// ngOnInit(): void {
//   console.log("hello");
  
// }

// setCart(){
//   this.cart = this.cartService.getCart();
// }

// removeFromCart( cartItem:CartItem){
//   this.cartService.removeFromCart(cartItem.food.id);
//   this.setCart(); //instance Load Data
// }
// changeQuantity(cartItem:CartItem, quantityInString:string){
//      const quantity= parseInt(quantityInString);
//      this.cartService.changeQuantity( cartItem.food.id, quantity);
//      this.setCart();
// }


