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
  totalItems: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getItems().subscribe((items) => {
      this.items = items;
      this.total = this.cartService.total;
      this.totalItems = this.cartService.totalItems;
    });
  }

  loadCart() {
    this.cartService.getItems().subscribe((items) => {
      this.items = items;
      this.total = this.cartService.getTotal();
    });
  }
  //   addToCart(productId:string) {
  //   this.cartService.addItemToCart(productId);
  //   this.loadCart();
  // }
  handleIncrement(productId: string) {
    this.cartService.incrementQuantity(productId);
    this.loadCart();
  }

  handleDecrement(productId: string) {
    this.cartService.decrementQuantity(productId);
    this.loadCart();
  }

  handleDelete(productId: string) {
    this.cartService.deleteItemFromCart(productId);
    this.loadCart();
  }
}
