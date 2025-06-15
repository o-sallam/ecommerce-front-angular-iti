import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  standalone: false,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  @Input() item!: CartItem;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

}
