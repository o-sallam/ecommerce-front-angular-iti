import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
baseUrl = 'http://localhost:3000/api';

  payWithFawry(data:any):Observable<any>{
 return this.http.post(`${this.baseUrl}/pay/fawry`, data);
  }
}
