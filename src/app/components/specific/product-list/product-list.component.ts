import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
// Update the import path and casing if needed
import { product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
   products: product[] = [];
   loading:boolean=true;
   error='';

   constructor(private productService: ProductService) { } //dependency injection of ProductService
   ngOnInit(): void {                //ngonit lifecycle hook to load products when the component initializes

    this.loadProducts();

   }

   loadProducts(): void {
    this.loading = true;
    this.productService.getAllProducts().subscribe({
      next:(data)=>{    // 
        this.products=data;
        this.loading=false;
      },
      error:(err)=>{
        this.error='Error loading products';
        this.loading=false;
      }
    });
   }

}
