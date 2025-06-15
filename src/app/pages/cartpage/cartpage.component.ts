import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cartpage',
  standalone: false,
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css'
})
export class CartpageComponent implements OnInit{

  items: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.items = this.cartService.getItems();
    this.total = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
