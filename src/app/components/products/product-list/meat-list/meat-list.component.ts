import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/product.service';
import { Product, ProductWithId } from 'src/app/modules/product/product.model';
import { DataService } from 'src/app/modules/data.service'

@Component({
  selector: 'app-meat-list',
  templateUrl: './meat-list.component.html',
  styleUrls: ['./meat-list.component.css'],
  providers: [ ProductService ]
})
export class MeatListComponent implements OnInit {

  products: any[] ;
  editProduct: any;

  constructor(private _productService: ProductService, private _dataService: DataService) { }

  ngOnInit() {
     this._productService.getProductsByCategory('meat').subscribe(data => this.products = data['msg'])
  }

  deleteProduct(id: string){
    this._productService.deleteProductByID(id);
    this._productService.getProductsByCategory('meat').subscribe(data => this.products = data['msg'])

  }
  editProductInfo(name: string, type: string, price: number, id: string, supplier: string){
    this.editProduct = new ProductWithId(id,name,type,price,"",supplier);  
    this._dataService.changeMessage(this.editProduct);
    this._productService.getProductsByCategory('meat').subscribe(data => this.products = data['msg'])

    }
}
