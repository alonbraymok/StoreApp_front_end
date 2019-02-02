import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NbLayoutModule} from 'nebular';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MainheroComponent } from './components/home/mainhero/mainhero.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './components/layout/login/login.component';
import { RegisterComponent } from './components/layout/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { IntroductionComponent } from './components/products/introduction/introduction.component';
import { ProductsDisplayerComponent } from './components/products/products-displayer/products-displayer.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

import { SuppliersComponent } from './components/admin-panel/suppliers/suppliers.component';
import { AdminNavbarComponent } from './components/admin-panel/admin-navbar/admin-navbar.component';
import { AdminProductsComponent } from './components/admin-panel/admin-products/admin-products.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './modules/user/user.service';
import { UsersService } from './modules/user/users.service';


import{ AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './components/user-list/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    MainheroComponent,
    CarouselComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
    IntroductionComponent,
    ProductsDisplayerComponent,
    AdminPanelComponent,
  
    SuppliersComponent,
    AdminNavbarComponent,
    AdminProductsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent},
    //   {path: 'products/meat', component: ProductsComponent},
    //   {path: 'products/milky', component: ProductsComponent},
    //   {path: 'products/snacks', component: ProductsComponent},
    //   {path: 'footer', component: FooterComponent},
    //   {path: 'adminPanel', component: AdminPanelComponent},
    //   {path: 'adminPanel/products', component: AdminProductsComponent},
    //   {path: 'adminPanel/users', component: AdminPanelComponent}
    // ])
  ],
  providers: [UserService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
