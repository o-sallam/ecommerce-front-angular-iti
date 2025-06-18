import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartApiUrl = environment.apiUrl + '/cart';
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

  // Decrease product quantity using /cart/decrease endpoint with JWT
  decreaseProductQuantity(productId: string) {
    const token = localStorage.getItem('token');
    return this.http.post(
      `${environment.apiUrl}/cart/decrease`,
      { productId },
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );
  }

  getCart(): Observable<Cart> {
    const token = localStorage.getItem('token');
    return this.http.get<Cart>(`${environment.apiUrl}/cart/me`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  }

  deleteItemFromCart(productId: string) {
    const token = localStorage.getItem('token');
    return this.http.request('delete', `${this.cartApiUrl}/delete`, {
      body: { productId },
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  }
}
