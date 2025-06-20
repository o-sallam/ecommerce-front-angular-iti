import { Component, Input } from '@angular/core';
import { Product} from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { WishlistService } from '../../../services/wishlist.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product; // Using non-null assertion operator since product is expected to be provided by parent component(product-list)

  constructor(private cartService: CartService ,private wishlistService: WishlistService) { }

  addToCart(): void {
    if (!this.product?.id) return;
    this.cartService.increaseProductQuantity(this.product.id).subscribe({
      next: () => {
        alert('Added to cart!');
      },
      error: () => {
        alert('Failed to add to cart.');
      }
    });
  }
addToWishlist(productId: string): Observable<any> {
  return this.wishlistService.addToWishlist(productId);
}


}





