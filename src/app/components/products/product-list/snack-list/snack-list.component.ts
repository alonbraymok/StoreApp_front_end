import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/product.service';
import { Product } from 'src/app/modules/product/product.model';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css'],
  providers: [ ProductService ]
})
export class SnackListComponent implements OnInit {

  products: Product[] =
  [new Product('1','snack','braymok',20,'human'),
   new Product('1','snack','braymok',20,'human'),
  ]

  constructor(private _userProduct: ProductService) { }

  ngOnInit() {
   this.products = this._userProduct.getAllSnackProduct();
  }

}
