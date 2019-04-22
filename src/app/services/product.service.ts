import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { Product } from 'src/app/helper/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  // product: Product

  url = "http://13.251.157.118:8080"
  getAllProducts() {
    return this.httpClient.get(`${this.url}/products`)
  }
  addProduct(productName, category, price) {
    const data = {
      productName: productName,
      category: category,
      price: price
    }
    return this.httpClient.post(`${this.url}/products`, data)
  }

  deleteProduct(id) {
    return this.httpClient.delete(`${this.url}/products/${id}`)
  }
}
