import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../helper/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[]

  ngOnInit() {
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products
    })
  }

  onClick() {
    alert("Hello")
  }

  addProduct(productName, category, price) {
    this.productService.addProduct(productName, category, price).subscribe(res => {
      this.ngOnInit()
    })
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(res => {
      this.ngOnInit()
    })
  }

}
