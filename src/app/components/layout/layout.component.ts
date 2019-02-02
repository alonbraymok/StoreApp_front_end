import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {
  
  public showHero: Boolean;

  constructor() {
    this.showHero = true;
   }
  ngOnInit() {

  }

  handleEvent(event) {
  }

  showMainHero() {
    return this.showHero;
  }

  hideHero() {
    this.showHero = false;
  }
}
