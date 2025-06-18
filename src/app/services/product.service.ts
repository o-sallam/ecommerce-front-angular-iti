import {Injectable} from '@angular/core'; //injectable to allow this service to be injected into components
import {HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';       //observable handling asynchoronous data
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn:'root'             //root means this service is available throughout the application
})

export class ProductService{

private apiUrl = environment.apiUrl;
private productsApiUrl=this.apiUrl+'/products';
  constructor(private http: HttpClient) { }       //injecting HttpClient to make HTTP requests

  getAllProducts(){//async function to fetch all products
  const result= this.http.get<Product[]>(this.productsApiUrl); //get request to fetch all products
  return result;

   }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.productsApiUrl}/${id}`); //get request to fetch a product by id
  }

  createProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(this.productsApiUrl,product);
  }

  updateProductById(id:string, product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.productsApiUrl}/${id}`,product);
  }

  deleteProductById(id:string):Observable<any>{
    return this.http.delete(`${this.productsApiUrl}/${id}`);
  }

  getRelatedProducts(productId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsApiUrl}/related/${productId}`);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsApiUrl}/featured`);
  }
}

