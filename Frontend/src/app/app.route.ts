import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProfileComponent} from './profile/profile.component';
import {OrderhistoryComponent} from './orderhistory/orderhistory.component';
import {AddProductComponent} from './add-product/add-product.component';
import {HomeComponent} from './home/home.component';

export const MAIN_ROUTES: Routes = [
  {
    path : '' , redirectTo : 'home', pathMatch : 'full'
  },
  {
  path: 'home',
  component: HomeComponent,
},
  {
    path: 'user',
    component: UserCartComponent,
  },
  {
    path: 'productDetails',
    component: ProductDetailsComponent,
  },

  {
    path: 'userlogin',
    component: LoginComponent,
  },
  {
    path: 'Mycart',
    component: UserCartComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'myprofile',
    component: ProfileComponent,
  },
  {
    path: 'orderhistory',
    component: OrderhistoryComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
  },
  {
    path: '**',
    component: HomePageComponent,
  }
]
