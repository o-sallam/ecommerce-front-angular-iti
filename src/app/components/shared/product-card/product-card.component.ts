import { Component, Input } from '@angular/core';
import { Product} from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product; // Using non-null assertion operator since product is expected to be provided by parent component(product-list)

  constructor(private cartService: CartService) { }

  addToCart(): void {
    if (!this.product?.id) return;
    this.cartService.increaseProductQuantity(this.product.id).subscribe({
      next: () => {
        console.log('Added to cart!');
      },
      error: () => {
        console.log('Failed to add to cart.');
      }
    });
  }

}





