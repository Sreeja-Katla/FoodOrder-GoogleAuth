
import { EventEmitter, Injectable, ɵɵpureFunction1 } from '@angular/core';
import { foods } from "./models/food";

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  i!: number;
  foods: any;

  constructor() {
    console.log("hello");
    
     console.log(this.i);
     
   }


  getAll():foods[]{

    return[
      {
        id:1,
        name:"Chicken Biryani",
        price:200,
        description:"",
        rating:4.5,
        imgUrl:'assets/biryani.jpg',
        imgUrl1:'assets/b1.jpg',
        imgUrl2:'assets/b2.jpg',
        quantity:1,
        category:"non-veg",

      },
      {
        id:2,
        name:"paneer Curry",
        price:100,
        description:"",
        rating:4.0,
        imgUrl:'assets/f1.jpg',
        imgUrl1:'assets/p1.jpg',
        imgUrl2:'assets/p2.jpg',
        quantity:1,
        category:"veg",
      },
      
      {
        id:3,
        name:"Chicken LegPiece",
        price:150,
        description:"",
        rating:3.9,
        imgUrl:'assets/f2.jpg',
        imgUrl1:'assets/c1.jpg',
        imgUrl2:'assets/c2.jpg',
        quantity:1,
        category:"non-veg",
      },
      {
        id:4,
        name:"Dum Biryani",
        price:300,
        description:"",
        rating:4.5,
        imgUrl:'assets/biryani1.jpg',
        imgUrl1:'assets/d1.jpg',
        imgUrl2:'assets/d2.jpg',
        quantity:1,
        category:"non-veg",
      },
      {
        id:5,
        name:"Veg Burger",
        price:120,
        description:"",
        rating:4.2,
        imgUrl:'assets/f5.jpg',
        imgUrl1:'assets/vb1.jpg',
        imgUrl2:'assets/vb2.jpg',
        quantity:1,
        category:"burger"
      },
      {
        id:6,
        name:"Cheese Pizza",
        price:140,
        description:"",
        rating:4.1,
        imgUrl:'assets/f6.jpg',
        imgUrl1:'assets/pz1.jpg',
        imgUrl2:'assets/pz2.jpg',
        quantity:1,
        category:"pizza"
      },
      {
        id:7,
        name:"Mutton Biryani",
        price:400,
        description:"",
        rating:4.4,
        imgUrl:'assets/mtn.jpg',
        imgUrl1:'assets/m1.jpg',
        imgUrl2:'assets/m2.jpg',
        quantity:1,
        category:"non-veg"
      },
      {
        id:8,
        name:"Mutton Curry",
        price:250,
        description:"",
        rating:4.6,
        imgUrl:'assets/mtn1.jpg',
        imgUrl1:'assets/mtn1.jpg',
        imgUrl2:'assets/mtn1.jpg',
        quantity:1,
        category:"non-veg",
      },
      {
        id:9,
        name:"Fish Fry",
        price:250,
        description:"",
        rating:4.3,
        imgUrl:'assets/fish.jpg',
        imgUrl1:'assets/fish.jpg',
        imgUrl2:'assets/fish.jpg',
        quantity:1,
        category:"non-veg",
      },
      {
        id:10,
        name:"Veg pulaw",
        price:150,
        description:"",
        rating:3.5,
        imgUrl:'assets/biryani3.jpg',
        imgUrl1:'assets/b1.jpg',
        imgUrl2:'assets/b2.jpg',
        quantity:1,
        category:"veg"
      },
      {
        id:11,
        name:"Veg-Biryani",
        price:170,
        description:"",
        rating:4.6,
        imgUrl:'assets/biryani4.jpg',
        imgUrl1:'assets/b1.jpg',
        imgUrl2:'assets/b2.jpg',
        quantity:1,
        category:"veg"
      },
      {
        id:12,
        name:"Veg Pizza",
        price:270,
        description:"",
        rating:4.1,
        imgUrl:'assets/pizza.jpg',
        imgUrl1:'assets/pz1.jpg',
        imgUrl2:'assets/pz2.jpg',
        quantity:1,
        category:"pizza",
      },
      {
        id:13,
        name:"Gulab Jamoon",
        price:100,
        description:"",
        rating:4.3,
        imgUrl:'assets/jamoon.jpg',
        imgUrl1:'assets/g1.jpg',
        imgUrl2:'assets/g3.jpg',
        quantity:1,
        category:"sweets",
      },
      {
        id:14,
        name:"Mothuchur Laddoo",
        price:110,
        description:"",
        rating:4.6,
        imgUrl:'assets/sweet1.jpg',
        imgUrl1:'assets/l1.jpg',
        imgUrl2:'assets/l2.jpg',
        quantity:1,
        category:"sweets",
      },
      {
        id:15,
        name:"MySurePack",
        price:100,
        description:"",
        rating:4.4,
        imgUrl:'assets/sweet2.jpg',
        imgUrl1:'assets/m1.jpg',
        imgUrl2:'assets/m2.jpg',
        quantity:1,
        category:"sweets",
      },
      {
        id:16,
        name:"Khazaa",
        price:100,
        description:"",
        rating:3,
        imgUrl:'assets/sweets5.png',
        imgUrl1:'assets/k1.jpg',
        imgUrl2:'assets/k2.jpg',
        quantity:1,
        category:"sweets",
      },
      {
        id:17,
        name:"Veg Burger",
        price:120,
        description:"",
        rating:4.2,
        imgUrl:'assets/f5.jpg',
        imgUrl1:'assets/vb1.jpg',
        imgUrl2:'assets/vb2.jpg',
        quantity:1,
        category:"burger"
      },
      {
        id:18,
        name:"Fish Fry",
        price:250,
        description:"",
        rating:4.3,
        imgUrl:'assets/fish.jpg',
        imgUrl1:'assets/fish.jpg',
        imgUrl2:'assets/fish.jpg',
        quantity:1,
        category:"non-veg",
      },
      {
        id:19,
        name:"Veg-Meals",
        price:200,
        description:"",
        rating:4.4,
        imgUrl:'https://img.freepik.com/premium-photo/indian-veg-rajasthani-thali-food-platter-consists-variety-veggies-lentils-sweet-dish-snacks-etc-selective-focus_726363-570.jpg?w=2000',
        imgUrl1:'https://img.freepik.com/premium-photo/indian-veg-rajasthani-thali-food-platter-consists-variety-veggies-lentils-sweet-dish-snacks-etc-selective-focus_726363-570.jpg?w=2000',
        imgUrl2:'https://img.freepik.com/premium-photo/indian-veg-rajasthani-thali-food-platter-consists-variety-veggies-lentils-sweet-dish-snacks-etc-selective-focus_726363-570.jpg?w=2000',
        quantity:1,
        category:"veg",
      },
      {
        id:20,
        name:"pizza",
        price:400,
        description:"",
        rating:4.1,
        imgUrl:'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.3c8885f8bc6f18facedc7626368f5105.1.jpg',
        imgUrl1:'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.3c8885f8bc6f18facedc7626368f5105.1.jpg',
        imgUrl2:'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.3c8885f8bc6f18facedc7626368f5105.1.jpg',
        quantity:1,
        category:"pizza",
      },



    ]
  }

  addCartClicked = new EventEmitter <{id: number, name: string, price:number,description:string,rating:number,imgUrl:string, imgUrl1:string,imgUrl2:string,quantity:number,category:string}>();

  showItemDetail(food:{id: number, name: string, price: number,description:string,rating:number,imgUrl:string,imgUrl1:string,imgUrl2:string,quantity:number,category:string}){
    this.addCartClicked.emit(food)
  }
}

// 'assets/biryani.jpg',
//       'assets/f1.jpg',
//       'assets/f2.jpg',
//       'assets/biryani1.jpg',
//       'assets/f5.jpg',
//       'assets/f6.jpg',
//       'assets/mtn.jpg',
//       'assets/mtn1.jpg',
//       'assets/f7.jpg',
//       'assets/fish.jpg',
//       'assets/f8.jpg',
//       'assets/biryani3.jpg',
//       'assets/pizza.jpg',
//       'assets/f10.jpg',
//       'assets/biryani4.jpg',
//       'assets/f12.jpg',
//       'assets/f13.jpg',
//       'assets/sweet1.jpg',
//       'assets/sweet2.jpg',
//       'assets/sweets4.png',
//       'assets/sweets5.png',
//       'assets/sweet4.jpg',
//       'assets/sweets6.jpg',
