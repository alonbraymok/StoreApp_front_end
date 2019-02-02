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

  products: Product[] =
  [new Product('1','milky','braymok',20,'human'),
   new Product('1','milky','braymok',20,'human'),
  ]

  constructor(private _userProduct: ProductService) { }

  ngOnInit() {
  }
}
