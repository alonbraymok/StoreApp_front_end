import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../../modules/product/product.service'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-products-displayer',
  templateUrl: './products-displayer.component.html',
  styleUrls: ['./products-displayer.component.css'],
  providers: [ProductService]
})
export class ProductsDisplayerComponent implements OnInit {

  products: String[] = []
  productsType: String
  isChanged: Boolean = false
  categories: String[] = []

  constructor(private route: ActivatedRoute, private _productService: ProductService) {  }
  
  ngOnInit() {
    this.route.url
    .subscribe(url => {
      console.log(url);
      debugger
      if (url[1]) {
        this.productsType = url[1].path;
      } else {
        this.productsType = 'all'
      }
      this._productService.getProductsByCategory(this.productsType).subscribe(data => {
        this.products = data['msg']
      })
      this._productService.getCategories().subscribe(categories => {
        this.categories = categories['msg']
      })
      debugger
    });

  }

  isAllProducts = () => this.productsType === 'all'

}