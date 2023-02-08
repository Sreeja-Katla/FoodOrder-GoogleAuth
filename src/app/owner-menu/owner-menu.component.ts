import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.css']
})
export class OwnerMenuComponent implements OnInit{

  ownerData:string;
  obj:any={};

ngOnInit(): void {
 this.ownerData =localStorage.getItem("itemArray");

 this.obj=JSON.parse( this.ownerData);
 console.log(this.obj);
 
 console.log(this.ownerData);

 console.log(this.obj[0].itemname);
 
}


}
