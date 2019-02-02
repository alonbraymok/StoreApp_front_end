import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import {APP_BASE_HREF} from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { AllProductListComponent } from 'src/app/components/products/product-list/all-product-list/all-product-list.component';
import { MilkyListComponent } from 'src/app/components/products/product-list/milky-list/milky-list.component';
import { MeatListComponent } from 'src/app/components/products/product-list/meat-list/meat-list.component';
import { SnackListComponent } from 'src/app/components/products/product-list/snack-list/snack-list.component';


const routes: Routes = [

      {path: '', component: HomeComponent},
      {path: 'products/meat', component: ProductsComponent},
      {path: 'products/milky', component: ProductsComponent},
      {path: 'products/snacks', component: ProductsComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'admin-panel', component: AdminPanelComponent, 
           children: [ {path: 'user-list', component: UserListComponent},
                       {path: 'product-list', component: ProductListComponent,
                        children:[
                        {path:'allProduct-list', component: AllProductListComponent},
                        {path: 'milky-list', component: MilkyListComponent},
                        {path: 'meat-list' , component: MeatListComponent},
                        {path: 'snack-list', component: SnackListComponent }
                      ]}]
      },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

export class AppRoutingModule { }