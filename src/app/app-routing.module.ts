import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [

      {path: '', component: HomeComponent},
      {path: 'products/meat', component: ProductsComponent},
      {path: 'products/milky', component: ProductsComponent},
      {path: 'products/snacks', component: ProductsComponent},
      {path: 'footer', component: FooterComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

export class AppRoutingModule { }