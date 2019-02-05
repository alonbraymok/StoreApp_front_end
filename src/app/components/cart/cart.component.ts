import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Product } from 'src/app/modules/product/product.model';
import { ProductService } from 'src/app/modules/product/product.service';
import { Subscription } from 'rxjs/Subscription';
import {MessageService} from '../../modules/messages/message.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductService]
})
@Injectable()

export class CartComponent implements OnDestroy, OnInit {
  products: any[];
  totalPrice: Number = 0;
  email: string = '';
  message: string;
  subscription: Subscription;
  subject = new Subject<any>()

  constructor(messageService: MessageService, private _producrService: ProductService) { 
    messageService.data.subscribe(data => {
      debugger
      console.log(data)
    })
  }

  ngOnDestroy() {
    debugger
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    const cart = sessionStorage.getItem('superSuisaCart')
    if (!cart) return
    const products = JSON.parse(cart)
    console.log(products)
    debugger
    this.products = products  
    //this.getOrderProducts(); //lunch order products 
  }

  ngAfterContentInit() {
    const cart = sessionStorage.getItem('superSuisaCart')
    if (!cart) return
    const products = JSON.parse(cart)
    this.products = products
    let sum = 0
    this.products.forEach(p => {
      sum+=p.price
    });
    this.totalPrice = sum
  }

  ngOnChanges() {
    debugger
  }

  getProducts = () => {
    const arr = []
    arr.push(new Product("bla", "type", 5, "src", "eliran"))
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
