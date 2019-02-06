import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/product.service';
import { Product, ProductWithId } from 'src/app/modules/product/product.model';
import { DataService } from 'src/app/modules/data.service';

@Component({
  selector: 'app-all-product-list',
  templateUrl: './all-product-list.component.html',
  styleUrls: ['./all-product-list.component.css'],
  providers: [ ProductService ]
})
export class AllProductListComponent implements OnInit {

  products: any[] = [];
  editProduct: any;
  search: string;
  constructor(private _productService: ProductService, private _dataService: DataService) { }

  ngOnInit() {
    this._productService.getCurrentProducts().subscribe(data => {debugger; this.products = data['msg']});
     
  }

  deleteProduct(id: string){
    this._productService.deleteProductByID(id);
    
  }
  editProductInfo(name: string, type: string, price: number, id: string, supplier: string){
  this.editProduct = new ProductWithId(id,name,type,price,"",supplier);  
  this._dataService.changeMessage(this.editProduct);
    
    this._productService.getCurrentProducts().subscribe(data => this.products = data['msg']);
  }

  getProductByName(){
    this._productService.getProductByName(this.search).subscribe( data => {debugger; this.products = data['msg']});
  }

}
