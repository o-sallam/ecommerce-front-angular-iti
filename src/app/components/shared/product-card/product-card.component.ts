
import { Component, Input } from '@angular/core';
import { product as Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor() { }

  addToCart(product: Product) {
    // Logic to add the product to the cart
    console.log(`Product added to cart: ${product.name}`);
  }
}
