import {Injectable} from '@angular/core'; //injectable to allow this service to be injected into components
import {HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';       //observable handling asynchoronous data
import { Product } from '../models/product.model';


import { of } from 'rxjs';


@Injectable({
  providedIn:'root'             //root means this service is available throughout the application
})

export class ProductService{

  private apiUrl=    "mongodb+srv://admin:12345678iti@cluster0.ix3l1dd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

  constructor(private http: HttpClient) { } //injecting HttpClient to make HTTP requests

  getAllProducts(): Observable<Product[]>{
   //return this.http.get<Product[]>(this.apiUrl + '/Products'); //get request to fetch all products

   return of([
    {
      id: 1,
      name: 'Sample Product',
      price: 99.99,
      category: 'Electronics',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A sample electronic product',
      image: 'https://via.placeholder.com/150',
      inStock: true
    },
    {
      id: 2,
      name: 'Another Product',
      price: 49.5,
      category: 'Books',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A sample book product',
      image: 'https://via.placeholder.com/150',
      inStock: false
    },
  ]);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`); //get request to fetch a product by id
  }

  createProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl +'/products',product);
  }

  updateProductById(id:string, product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`,product);
  }

  deleteProductById(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }
}

