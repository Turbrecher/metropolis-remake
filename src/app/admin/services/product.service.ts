import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { Url } from '../../shared/Utilities/Url';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }



  getProducts() {
    return this.http.get<Array<Product>>(Url.api + 'products')
  }

  getProduct(id: number) {
    return this.http.get<Product>(Url.api + 'products/' + id)
  }

  createProduct( formData: FormData) {
    let headers = { 'Authorization': 'Bearer ' + this.cookieService.get('token') }

    return this.http.post<Product>(Url.api + 'products', formData, { headers })
  }

  editProduct(id: number, formData: FormData) {
    let headers = { 'Authorization': 'Bearer ' + this.cookieService.get('token') }

    return this.http.post<Product>(Url.api + 'products/' + id, formData, { headers })
  }

  deleteProduct(id: number) {
    let headers = { 'Authorization': 'Bearer ' + this.cookieService.get('token') }

    return this.http.delete<any>(Url.api + 'products/' + id, { headers })
  }
}
