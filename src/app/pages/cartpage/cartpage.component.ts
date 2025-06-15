import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cartpage',
  standalone: false,
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css',
})
export class CartpageComponent implements OnInit {
  items: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
 this.cartService.getItemsObservable().subscribe(items => {
      this.items = items;
      this.total = this.cartService.getTotal();
    });
  }

  ngOnInit(): void {
  this.items = this.cartService.getItems(); 
  this.total = this.cartService.getTotal();
  }

  loadCart() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }
  addToCart(item: CartItem) {
  this.cartService.addItem(item);
  this.loadCart();
}
  handleIncrement(id: number) {
    this.cartService.incrementQuantity(id);    
  }

  handleDecrement(id: number) {
    this.cartService.decrementQuantity(id);
    this.loadCart();
  }

  handleDelete(item: CartItem) {
    this.cartService.delete(item);
    this.loadCart();
  }
}
