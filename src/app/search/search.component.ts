import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(){ }
  ngOnInit(): void {
  }

enteredSearchValue:string='';

@Output()
   searchText:EventEmitter<string>=new EventEmitter<string>();

   onSearchEvent(){
         this.searchText.emit(this.enteredSearchValue);
   }
}
