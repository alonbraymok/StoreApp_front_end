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

  product: Product
  productName: string;
  productType: string;
  productPrice: number;
  productImg: string;
  productSupplier: string;

  constructor(private _product_service: ProductService) { }

  ngOnInit() {
  }

  addNewProduct(){
    this.product = new Product(this.productName, this.productType, this.productPrice, 
      this.productImg, this.productSupplier);
      this._product_service.addNewProduct(this.product);
  }

}
