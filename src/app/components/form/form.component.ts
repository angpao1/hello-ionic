import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input("product_com") product
  constructor() {
  }

  ngOnInit() {
    this.onEvent(this.product.time)
  }

  public distance: number = 0;
  onEvent(time) {
    var x = setInterval(() => {
      this.distance = time -= 1;
      // console.log(this.distance)
      if (this.distance === 0) {
        clearInterval(x);
      }
    }, 1000);
  }
}
