import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-implement',
  templateUrl: './payment-implement.component.html',
  styleUrls: ['./payment-implement.component.css']
})
export class PaymentImplementComponent {

  paymentHandler: any = null;
  amount:string;
  totalAmount:number;
  constructor() {}
  ngOnInit() {

    this.amount=localStorage.getItem("totalAmount");
    this.totalAmount=JSON.parse(this.amount)
    
       console.log(this.amount);
       
    this.invokeStripe();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MWvBSSFWDQYkXrRvVj5w2LMetkgSyvTBAmuuVs5gWisDF2X6F6cbpBafSs1JhqWkQWKKoGOr00vs3qWfnU6P7M800FT9m9SWc',
      locale: 'auto',
      token: function (stripeToken: any) {
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
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}