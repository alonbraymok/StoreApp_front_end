import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminProductsComponent } from './components/admin-panel/admin-products/admin-products.component';

import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [

      {path: '', component: HomeComponent},
      {path: 'products/meat', component: ProductsComponent},
      {path: 'products/milky', component: ProductsComponent},
      {path: 'products/snacks', component: ProductsComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'adminPanel', component: AdminPanelComponent},
      {path: 'adminPanel/products', component: AdminProductsComponent},
      {path: 'adminPanel/users', component: AdminPanelComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

export class AppRoutingModule { }