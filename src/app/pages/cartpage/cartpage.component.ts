import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cartpage',
  standalone: false,
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css'],
})
export class CartpageComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  totalItems: number = 0;

  constructor(protected cartService: CartService) {}

  handleIncrement(productId: string) {
    const item = this.cartItems.find((item) => item.productId.id === productId);
    if (!item) return;
    const prevQuantity = item.quantity;
    const prevTotal = this.total;
    // Optimistic UI update
    item.quantity++;
    this.totalItems++;
    this.total += item.productId.price;
    this.cartService.increaseProductQuantity(productId).subscribe({
      next: (res: any) => {
        if (res && res.total !== undefined && res.totalItems !== undefined) {
          this.total = res.total;
          this.totalItems = res.totalItems;
        }
      },
      error: () => {
        // Revert optimistic update on error
        item.quantity = prevQuantity;
        this.totalItems--;
        this.total = prevTotal;
      },
    });
  }

  handleDecrement(productId: string) {
    const item = this.cartItems.find((item) => item.productId.id === productId);
    if (!item || item.quantity <= 1) return; // Prevent decrement below 1
    const prevQuantity = item.quantity;
    const prevTotal = this.total;
    // Optimistic UI update
    item.quantity--;
    this.totalItems--;
    this.total -= item.productId.price;
    this.cartService.decreaseProductQuantity(productId).subscribe({
      next: (res: any) => {
        if (res && res.total !== undefined && res.totalItems !== undefined) {
          this.total = res.total;
          this.totalItems = res.totalItems;
        }
      },
      error: () => {
        // Revert optimistic update on error
        item.quantity = prevQuantity;
        this.totalItems++;
        this.total = prevTotal;
      },
    });
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cartItems = cart.items;
      this.total = cart.total;
      this.totalItems = cart.totalItems;
    });
  }
}
