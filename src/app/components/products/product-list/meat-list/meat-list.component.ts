import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/product.service';
import { Product } from 'src/app/modules/product/product.model';

@Component({
  selector: 'app-meat-list',
  templateUrl: './meat-list.component.html',
  styleUrls: ['./meat-list.component.css'],
  providers: [ ProductService ]
})
export class MeatListComponent implements OnInit {

  products: Product[] =
  [new Product('1','meat','braymok',20,'human'),
   new Product('1','meat','braymok',20,'human'),
  ]

  constructor(private _userProduct: ProductService) { }

  ngOnInit() {
  }

}
