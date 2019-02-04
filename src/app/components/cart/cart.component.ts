import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/product.model';
import { ProductService } from 'src/app/modules/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductService]
})
export class CartComponent implements OnInit {

  products: Product[];
  totalPrice: Number = 0;
  email: string = '';
  constructor(private _producrService: ProductService) { }

  ngOnInit() {
    //this.getOrderProducts(); //lunch order products 
  }

  getOrderProducts(){
    this.products = this._producrService.getProductsByOrder(this.email);
    this.products.forEach((product) => {
      this.totalPrice = this.totalPrice.valueOf() + product.productPrice.valueOf();
    })
  }

  resetOrder(){
    alert('order resert');
    this._producrService.restOrderForUser(this.email);
  }

}
