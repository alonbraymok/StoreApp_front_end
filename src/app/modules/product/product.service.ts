import { Product, ProductWithId } from 'src/app/modules/product/product.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()
export class ProductService {
    
    private products: any[] ;

    constructor(private http: HttpClient) {
        this.updateCurrentProducts();
     }

    updateCurrentProducts = () => {
        this.http.get(`/api/products/`).subscribe(
            data => {
                if (data['ok']) {
                    this.products = data['msg'];                                    
                } else {
                    console.log("error");
                }
            })
    }

    getProductsWithSearch = (minval, maxval, category) => {
        return this.http.get(`/api/products/search/?minval=${minval}&maxval=${maxval}&category=${category}`)
    }

    getProductsByCategory = (category) => { debugger
        return this.http.get(`/api/products/${category.toUpperCase()}`)
    }

    getCategories = () => {
        return this.http.get(`/api/products/categories`)
    }

    getCurrentProducts(){
        return this.http.get(`/api/products/`);
    }

    getProductByName(name: string){
        return this.http.get(`/api/manage/products/${name}`);
    }

    addNewProduct(product: Product) {
        debugger
        this.http.post('/api/manage/products', product).subscribe(data => console.log(data))
    }
    
    deleteProductByID(id: string) {
        console.log(id);
        this.http.delete(`/api/manage/products/${id}`).subscribe(data => console.log(data))
    }

    editProduct = (product: ProductWithId) => {
        return this.http.put(`/api/manage/products/${product.productId}`, product)
        //send new product info with id to find product
    }

    getProductsByOrder(email: string): Product[]{
        //return product of spcific user order by email
        return null;
    }
    restOrderForUser(email: string){
        //reset order for spcific user by email
    }

}