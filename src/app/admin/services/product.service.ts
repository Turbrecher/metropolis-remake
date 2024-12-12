import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { Url } from '../../shared/Utilities/Url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  getProducts() {
    return this.http.get<Array<Product>>(Url.api + 'products')
  }
}
