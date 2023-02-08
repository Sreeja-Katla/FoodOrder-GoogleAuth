import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { foods } from '../models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { provideCloudflareLoader } from '@angular/common';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  itemDetail: any;
  // food!: foods;
  foods: {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    imgUrl: string;
    imgUrl1: string;
    imgUrl2: string;
    quantity: number;
    category: string;
  }[] = [];
  title: string | undefined = '';
  show: boolean = false;
  cartItem = {};
  public filterCategory: any;

  constructor(
    private fs: FoodServiceService,
    private modal_popup: NgbModal,
    private cartService: CartServiceService,
    private routing: Router
  ) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();

    this.filterCategory = this.fs.getAll()
  }

  showDetails(index: number, modal: any) {
    this.show = true;
    this.modal_popup.open(modal);
    console.log(this.foods[index]);
    console.log(index);
    this.itemDetail = this.foods[index];
  }

  onOrder(cartItem: {}) {
    this.show = false;
    console.log('hello');
    this.routing.navigate(['/cart']);
    this.cartService.addToCart(cartItem);
    alert('hello');
    console.log(cartItem);
  }

  closePopUp() {
    console.log('hi');
    this.show = false;
  }
  searchText: string = '';

  onSearchTextEntered(enteredSearchValue: string) {
    this.searchText = enteredSearchValue;
    console.log(this.searchText);
  }

  filter(category: string) {
    this.filterCategory = this.foods
      .filter((a:any) => {
        if (a.category == category || category == '') {
          return a;
        }
        console.log(a.category);
      })
  }
}
