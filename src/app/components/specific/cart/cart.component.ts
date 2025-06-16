import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  {

  @Input() items: CartItem[] = [];
  
  @Output() increment = new EventEmitter<string>();
  @Output() decrement = new EventEmitter<string>();
  @Output() delete = new EventEmitter<any>();


  get total(): number {
   return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

}


  onIncrement(id: string) {
    this.increment.emit(id);
  }
  onDecrement(id: string) {
    this.decrement.emit(id);
  }
  onDelete(item: any) {
    this.delete.emit(item);
  }

  //   addItem(newItem: CartItem) {
  //   const existing = this.items.find((i) => i.id === newItem.id);
  //   if (existing) {
  //     existing.quantity += newItem.quantity;
  //   } else {
  //     this.items.push({ ...newItem });
  //   }
  // }

}
