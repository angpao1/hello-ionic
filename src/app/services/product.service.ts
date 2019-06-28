import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert, TouchSequence } from 'selenium-webdriver';
import { Product } from 'src/app/helper/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  // product: Product

  // url = "http://192.168.43.8:8080"
  url = "http://localhost:8080"
  getAllProducts() {
    return this.httpClient.get(`${this.url}/products`)
  }
  addProduct(productName, time) {
    const data = {
      productName: productName,
      time: time
    }
    return this.httpClient.post(`${this.url}/products`, data)
  }

  deleteProduct(id) {
    return this.httpClient.delete(`${this.url}/products/${id}`)
  }

  updateProduct(productName, category, price, id) {
    const data = {
      productName: productName,
      category: category,
      price: price
    }
    return this.httpClient.put(`${this.url}/products/${id}`, data)
  }

  getProductById(id) {
    return this.httpClient.get(`${this.url}/products/${id}`)
  }
}
