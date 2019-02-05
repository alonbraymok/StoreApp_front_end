import { Component, OnInit } from '@angular/core';
import { DataService} from 'src/app/modules/data.service'
import { ProductWithId } from 'src/app/modules/product/product.model';
import { ProductService } from 'src/app/modules/product/product.service';

@Component({
  selector: 'app-edit-product-info',
  templateUrl: './edit-product-info.component.html',
  styleUrls: ['./edit-product-info.component.css']
})
export class EditProductInfoComponent implements OnInit {

  productName: string
  productType: string
  productPrice: number
  productImg: string
  productSupplier: string;
  productID: string;

  editProduct: ProductWithId
  constructor(private _dataService: DataService, private _productService: ProductService) { }

  ngOnInit() {
    this._dataService.currentMessage.subscribe(data => {
      debugger
      this.productName = data["productName"];
      this.productType = data["productType"];
      this.productPrice = data["productPrice"];
      this.productImg = data["productPicture"];
      this.productSupplier = data["productSupplier"];  
      this.productID = data["productId"];
    });
  }

  editNewProduct(){
    this.editProduct = new ProductWithId(this.productID, this.productName, this.productType, 
      this.productPrice, this.productImg, this.productSupplier);
      this._productService.editProduct(this.editProduct).subscribe(modified => {
        alert(JSON.stringify(modified['msg']))
        
      })
  }

}
