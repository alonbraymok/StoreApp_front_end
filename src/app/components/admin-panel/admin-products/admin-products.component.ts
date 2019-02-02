import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  }

  userChoosed: String;
  
  ngOnInit() {
    this.route.url
    .subscribe(url => {
      console.log(url);
      this.userChoosed = url[1].path;
    });
  }
}
