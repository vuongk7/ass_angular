import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../models/product';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient) { }
  getProduct(id: any): Observable<Iproducts> {
    // return data.find(item => item.id === id);
    return this.http.get<Iproducts>(`http://localhost:3000/products/${id}`);
  }
  getProductList(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(`http://localhost:3000/products`);
  }
  deleteProduct(id: number|string) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  addProduct(product:Iproducts) {
    return this.http.post<Iproducts>(`http://localhost:3000/products`,product);
  }
  updateProduct(product: Iproducts): Observable<Iproducts> {
    return this.http.put<Iproducts>(`http://localhost:3000/products/${product.id}`, product);
  }
}
