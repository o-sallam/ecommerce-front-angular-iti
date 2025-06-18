import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  relatedProducts: Product[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loading = true;
        this.productService.getProductById(id).subscribe({
          next: (data) => {
            this.product = data;
            this.loading = false;
            this.loadRelatedProducts();
          },
          error: (err) => {
            console.error('Error loading product:', err);
            this.loading = false;
          },
        });
      } else {
        console.error('No product ID found in route parameters');
        this.loading = false;
      }
    });
  }

  loadRelatedProducts(): void {
    if (this.product) {
      console.log(this.product);
      this.productService.getRelatedProducts(this.product.id).subscribe({

        next: (products) => {
          this.relatedProducts = products;
        },
        error: (err) => {
          console.error('Error loading related products:', err);
        },
      });
    }
  }

  addToCart(): void {
    console.log('Added from details:', this.product);
  }
}
