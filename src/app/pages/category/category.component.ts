import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  product?: Product;
  products: Product[] = [];
  categoryType: string = '';
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoryType = params['type'];

      this.productService
        .getProductsByCategoryName(this.categoryType)
        .subscribe((data) => {
          this.products = data;
        });
    });
  }
  addToCart(product: Product): void {
    if (!product?.id) return;
    this.cartService.increaseProductQuantity(product.id).subscribe({
      next: () => {
        alert('Added to cart!');
      },
      error: (err) => {
        console.error('Failed to add to cart:', err);
        alert('Failed to add to cart.');
      },
    });
    console.log('Added from category:', product);
  }
}
