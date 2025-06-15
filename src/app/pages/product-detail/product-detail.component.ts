import { Component,OnInit } from '@angular/core';
import{ ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product?: Product;                        //optional :undefiend if data is not loaded &=Product if it's loaded
  loading: boolean = true;

  constructor(private route:ActivatedRoute, private productService: ProductService) {} //injecting ActivatedRoute to get route parameters and ProductService to fetch product data

  ngOnInit(): void {                                  //ngOnInit lifecycle hook to fetch product details when component initializes
    const productId = this.route.snapshot.paramMap.get('id');         //get the product id from the route parameters
    if (productId) {
      this.productService.getProductById(productId).subscribe({
        next: (product) => {
          this.product = product; //assign the fetched product to the component property
          this.loading = false; //set loading to false after data is loaded
        },
        error: (error) => {
          console.error('Error fetching product:', error); //log any errors that occur during data fetching
          this.loading = false; //set loading to false even if there is an error
        }
      });
    } else {
      console.error('No product ID found in route parameters'); //log an error if no product id is found
      this.loading = false; //set loading to false if no id is found
    }

  }

  addToCart(): void {
  console.log('Added from details:', this.product);
}

}
