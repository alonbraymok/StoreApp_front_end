import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../../modules/product/product.service'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import {DataService} from '../../../modules/data.service'

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
  minval: Number;
  maxval: Number;
  selectedCategory: String;

  constructor(private _dataService: DataService, private route: ActivatedRoute,
      private _productService: ProductService) {  }

  ngOnInit() {
    this.route.url
    .subscribe(url => {
      console.log(url);
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
    });
    this.minval = 0;
    this.maxval = 100;
    this.selectedCategory = '';
  }

  addToCart = (product) => {

    let itemsParsed = []
    const items = sessionStorage.getItem('superSuisaCart')
    if (items) {
      itemsParsed = JSON.parse(items)
    }
    itemsParsed.push(product)
    this.sendMessage(itemsParsed)
    sessionStorage.setItem('superSuisaCart', JSON.stringify(itemsParsed))
  }

  sendMessage(products): void {
    // send message to subscribers via observable subject
    debugger
    this._dataService.changeMessage(products);
}


  handleSearch = () => {
    this._productService.getProductsWithSearch(this.minval, this.maxval, this.selectedCategory).subscribe(data => {
      this.products = data['msg']
    })
  }

  isAllProducts = () => this.productsType === 'all'

}