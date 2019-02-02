import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/product.service';
import { Product } from 'src/app/modules/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService ]
})
export class ProductListComponent implements OnInit {

  products: Product[] =
  [new Product('1','alon','braymok',20,'human'),
   new Product('1','alon','braymok',20,'human'),
  ]

  constructor(private _userProduct: ProductService) { }

  ngOnInit() {
    this.products.forEach(product => console.log(product.id) )
  }

}
