import { Product } from 'src/app/modules/product/product.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()
export class ProductService {
    
    private products: Product[] ;

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

    getProductsWithSearch = (minval, maxval, category) => {
        return this.http.get(`/api/products/search/?minval=${minval}&maxval=${maxval}&category=${category}`)
    }

    getProductsByCategory = (category) => {
        return this.http.get(`/api/products/${category.toUpperCase()}`)
    }

    getCategories = () => {
        return this.http.get(`/api/products/categories`)
    }

    getCurrentProducts(){
        return this.products;
    }

    addNewProduct(product: Product){
        //send product to db
    }
    getAllMeatProduct(): Product[] {
        //return all meat product
        return null;
    }
    getAllMilkyProduct(): Product[]{
        //return all milky product
        return null;
    }
    getAllSnackProduct(): Product[]{
        //return all snack product
        return null;
    }
    getProductsByOrder(email: string): Product[]{
        //return product of spcific user order by email
        return null;
    }
    restOrderForUser(email: string){
        //reset order for spcific user by email
    }

}