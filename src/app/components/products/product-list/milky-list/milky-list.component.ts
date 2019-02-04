import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/product.service';
import { Product } from 'src/app/modules/product/product.model';

@Component({
  selector: 'app-milky-list',
  templateUrl: './milky-list.component.html',
  styleUrls: ['./milky-list.component.css'],
  providers: [ ProductService ]
})
export class MilkyListComponent implements OnInit {

  products: any[] ;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
     this._productService.getProductsByCategory('milky').subscribe(data => this.products = data['msg'])
  }
}
