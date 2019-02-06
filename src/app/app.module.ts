import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NbLayoutModule} from 'nebular';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MainheroComponent } from './components/home/mainhero/mainhero.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './components/layout/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { IntroductionComponent } from './components/products/introduction/introduction.component';
import { ProductsDisplayerComponent } from './components/products/products-displayer/products-displayer.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './modules/user/user.service';
import { UsersService } from './modules/user/users.service';
import { DataService } from './modules/data.service'
import { WebSocketService} from './modules/webSocket/web-socket.service';
import { ChatService } from './modules/webSocket/chat.service';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { AllProductListComponent } from './components/products/product-list/all-product-list/all-product-list.component';
import { MilkyListComponent } from './components/products/product-list/milky-list/milky-list.component';
import { MeatListComponent } from './components/products/product-list/meat-list/meat-list.component';
import { SnackListComponent } from './components/products/product-list/snack-list/snack-list.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { D3GraghComponent } from './components/d3-gragh/d3-gragh.component';
import { EditUserInfoComponent } from './components/edit-user-info/edit-user-info.component';
import { EditProductInfoComponent } from './components/edit-product-info/edit-product-info.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GoogleMapComponent } from './components/about-us/google-map/google-map.component';
import { RealTimeMessageComponent } from './components/real-time-message/real-time-message.component';
import { AddLocationPipe } from './modules/pipes/add-location.pipe';
import { CmsComponent } from './components/cms/cms.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    MainheroComponent,
    CarouselComponent,
    LoginComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
    IntroductionComponent,
    ProductsDisplayerComponent,
    UserListComponent,
    AdminPanelComponent,
    ProductListComponent,
    AllProductListComponent,
    MilkyListComponent,
    MeatListComponent,
    SnackListComponent,
    AddProductComponent,
    CartComponent,
    D3GraghComponent,
    EditUserInfoComponent,
    EditProductInfoComponent,
    AboutUsComponent,
    GoogleMapComponent,
    RealTimeMessageComponent,
    AddLocationPipe,
    CmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBQpoUSTYCOeaOLrvaXwRWJFkiMH3ghGks'}),
    NgbModule.forRoot()
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
  providers: [UserService, UsersService, DataService, WebSocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
