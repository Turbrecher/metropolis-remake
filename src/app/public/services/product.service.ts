import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { Url } from '../../shared/Utilities/Url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  getProducts() {
    return this.http.get<Array<Product>>(Url.api + 'products')
  }

}
