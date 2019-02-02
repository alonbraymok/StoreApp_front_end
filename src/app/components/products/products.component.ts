import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/modules/user/user.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

  ngOnChange() {
    
  }

}
