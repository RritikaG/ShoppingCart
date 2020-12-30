import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {ItemserviceService} from './itemservice.service';
import {AppService} from './app.service';
import {AuthenticateService} from './authenticate.service';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UserCartComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    AddProductComponent,
    FooterComponent,
    OrderhistoryComponent,
    MainNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemserviceService, AppService, AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
