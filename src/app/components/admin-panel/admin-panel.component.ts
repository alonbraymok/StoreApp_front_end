import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  isProducts: Boolean;

  constructor() {
    this.isProducts = true;
   }

   isProduct() {
     return this.isProducts;
   }

  ngOnInit() {
  }

}
