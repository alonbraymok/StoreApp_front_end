import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/product.model';
import { ProductService } from 'src/app/modules/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ ProductService] 
})
export class AddProductComponent implements OnInit {

  productName: string;
  productCategory: string;
  productDesc: string;
  productImg: string;
  productPrice: number;

  product: Product
  
  constructor(private _product_service: ProductService) { }

  ngOnInit() {
  }

  addNewProduct(){
    this.product = new Product(this.productImg, this.productName, this.productDesc,
                               this.productPrice, this.productCategory);
    this._product_service.addNewProduct(this.product);
  }

}
