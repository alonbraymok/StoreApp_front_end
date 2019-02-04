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

  products: any[] ;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
     this._productService.getProductsByCategory('snacks').subscribe(data => this.products = data['msg'])
  }

}
