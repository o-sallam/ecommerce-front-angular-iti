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
  product?: Product; //optional :undefiend if data is not loaded &=Product if it's loaded
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {} //injecting ActivatedRoute to get route parameters and ProductService to fetch product data

  ngOnInit(): void {
    //ngOnInit lifecycle hook to fetch product details when component initializes
 this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productService.getProductById(id).subscribe({
          next: (data) => {
            this.product = data;
            this.loading = false;
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

  addToCart(): void {
    console.log('Added from details:', this.product);
  }
}
