import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsInterface } from '../interfaces/products-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl ='https://fakestoreapi.com/products';

  constructor(private http:HttpClient) { }

  getProducts(): Observable<ProductsInterface[]> {
    return this.http.get<ProductsInterface[]>(this.apiUrl);
  }

}
