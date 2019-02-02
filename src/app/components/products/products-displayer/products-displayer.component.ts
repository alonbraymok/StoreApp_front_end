import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-displayer',
  templateUrl: './products-displayer.component.html',
  styleUrls: ['./products-displayer.component.css']
})
export class ProductsDisplayerComponent implements OnInit {

  products: String[] = []
  productsType: String
  isChanged: Boolean = false

  constructor(private route: ActivatedRoute, private http: HttpClient) {  }
  
  ngOnInit() {
    this.route.url
    .subscribe(url => {
      console.log(url);
      this.productsType = url[1].path;
    });
      this.http.get(`/api/products/${this.productsType.toUpperCase()}`).subscribe(
        data => {
          if (data['ok']) {
            this.products = data['msg'];
          }
        })
  }

}