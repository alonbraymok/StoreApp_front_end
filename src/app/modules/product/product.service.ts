import { Product } from 'src/app/modules/product/product.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()
export class UserService {
    
    private products: Product ;

    constructor(private http: HttpClient) {
        this.updateCurrentProducts();
     }

    updateCurrentProducts = () => {
        this.http.get(`/api/productss/allProducts`).subscribe(
            data => {
                if (data['ok']) {
                    this.products = data['msg'];
                } else {
                }
            })
    }
    getCurrentProducts(){
        return this.products;
    }

    
}