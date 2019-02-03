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

  products: Product[] = [
    new Product('p img','p name','p desc',1000,'p catgory'),
    new Product('p img','p name','p desc',2000,'p catgory')
  ];
  totalPrice: Number = 0;
  constructor(private _producrService: ProductService) { }

  ngOnInit() {
    //this.getOrderProducts(); //lunch order products 
  }

  getOrderProducts(){
    this.products = this._producrService.getProductsByOrder();
    this.products.forEach((product) => {
      this.totalPrice = this.totalPrice.valueOf() + product.productPrice.valueOf();
    })
  }
}
