import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  private cartApiUrl = environment.apiUrl + '/cart';
  private currentUser = '68377eac183c5f0af6fefe7c';
  constructor(private http: HttpClient) {}

  // Add product to cart using /cart/increase endpoint with JWT
  increaseProductQuantity(productId: string) {
    const token = localStorage.getItem('token');
    return this.http.post(
      `${environment.apiUrl}/cart/increase`,
      { productId },
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );
  }

  getItems(): Observable<CartItem[]> {
    return this.http
      .get<CartItem[]>(`${this.cartApiUrl}?userId=${this.currentUser}`)
      .pipe(tap((items) => (this.items = items)));
  }

  deleteItemFromCart(productId: string) {
    this.items = this.items.filter((i) => i.id !== productId);
    this.http
      .request('delete', `${this.cartApiUrl}/delete`, {
        body: { productId, userId: this.currentUser },
      })
      .subscribe();
  }

  incrementQuantity(productId: string) {
    const item = this.items.find((i) => i.id === productId);
    if (item) {
      item.quantity++;
      this.updateItemQuantityOnServer(productId, item.quantity);
    }
  }

  decrementQuantity(productId: string) {
    const item = this.items.find((i) => i.id === productId);
    if (!item) return;
    if (item.quantity > 1) {
      item.quantity--;
      this.updateItemQuantityOnServer(productId, item.quantity);
    } else {
      this.deleteItemFromCart(productId);
    }
  }

  private updateItemQuantityOnServer(productId: string, quantity: number) {
    this.http
      .put(`${this.cartApiUrl}/${productId}`, {
        quantity,
        userId: this.currentUser,
      })
      .subscribe();
  }

  getTotal(): number {
    return this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
}
