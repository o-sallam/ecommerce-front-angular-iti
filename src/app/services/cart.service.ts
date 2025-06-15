import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cartItems');
      if (stored) {
        this.items = JSON.parse(stored);
        this.itemsSubject.next(this.items);
      }
    }
  }

  getItemsObservable() {
    return this.itemsSubject.asObservable();
  }

  private updateState() {
    this.itemsSubject.next([...this.items]);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }

  addItem(product: Omit<CartItem, 'quantity'>) {
    const existing = this.items.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.updateState();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  delete(item: CartItem) {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.updateState();
  }
  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
    this.updateState();
  }

  decrementQuantity(id: number) {
    const item = this.items.find((i) => i.id === id);
    if (!item) return;
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.delete(item);
    }
    this.updateState();
  }

  getTotal(): number {
    //  this.items.reduce((acc,item) =>{
    //   return acc + item.price * item.quantity;
    //  },0)
    return this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
}
