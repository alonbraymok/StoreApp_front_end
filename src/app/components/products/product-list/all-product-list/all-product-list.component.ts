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

  products: Product[] =
  [new Product('1','all','braymok',20,'human'),
   new Product('1','all','braymok',20,'human'),
  ]

  constructor(private _userProduct: ProductService) { }

  ngOnInit() {
    this.products.forEach(product => console.log(product.id) )
  }

}
