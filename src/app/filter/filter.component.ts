import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  selectedCategory:string='All'

  @Output()
   filterCategory : EventEmitter<string>=new EventEmitter<string>();


   onSelectingCategory(){
    this.filterCategory.emit(this.selectedCategory);
   console.log(this.selectedCategory);
   }
}
