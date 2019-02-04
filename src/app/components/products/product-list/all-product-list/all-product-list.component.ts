import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/product.service';
import { Product } from 'src/app/modules/product/product.model';

@Component({
  selector: 'app-all-product-list',
  templateUrl: './all-product-list.component.html',
  styleUrls: ['./all-product-list.component.css'],
  providers: [ ProductService ]
})
export class AllProductListComponent implements OnInit {

  products: any[] = [];
  

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    debugger
    this._productService.getCurrentProducts().subscribe(data => this.products = data['msg']);
    debugger   
  }

}
