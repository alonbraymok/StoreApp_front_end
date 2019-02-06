import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Product } from 'src/app/modules/product/product.model';
import { ProductService } from 'src/app/modules/product/product.service';
import { Subscription } from 'rxjs/Subscription';
import {DataService} from '../../modules/data.service'
import { Subject } from 'rxjs';
import { isArray } from 'util';
import { UsersService } from 'src/app/modules/user/users.service';

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

  constructor(private _dataService: DataService, private _producrService: ProductService, private _usersService: UsersService) { 

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

  setProducts = (products) => {
    if (isArray(products)) {
      this.products = products
      let sum = 0
      products.forEach(product => {
        sum += product.price
      });
      this.totalPrice = sum
    }
  }

  ngOnInit() {
    this._dataService.currentMessage.subscribe(product => {
      this.setProducts(product)
    })
    const cart = sessionStorage.getItem('superSuisaCart')
    if (!cart) return
    const products = JSON.parse(cart)
    console.log(products)
    this.products = products
    let sum = 0
    this.products.forEach(product => {
      sum += product.price
    });
    this.totalPrice = sum
    //this.getOrderProducts(); //lunch order products 
  }

  ngOnChanges() {
    
  }

  sendOrder = () => {
    const user = JSON.parse(sessionStorage.getItem('activeUser'))
    this._usersService.sendOrder(user.email, this.products)
    sessionStorage.removeItem('superSuisaCart')
    this.products = []
    this.totalPrice = 0
    alert(`Thanks, ${user.email} !`)
  }

  removeItem = (product) => {
    const products = this.products
    this.products = products.filter(p => product !== p)
    let sum = 0
    this.products.forEach(product => {
      sum += product.price
    });
    this.totalPrice = sum
    sessionStorage.removeItem('superSuisaCart')
    sessionStorage.setItem('superSuisaCart', JSON.stringify(this.products))
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

  resetCart(){
    alert('order resert');
    sessionStorage.removeItem('superSuisaCart')
    this.products = [];
    this.totalPrice = 0;
  }
}
