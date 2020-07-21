import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuard as AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

import { ProductFormComponent } from './admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    BsNavbarComponent,
    MyOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'products', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'login', component:LoginComponent},

      {path:'my/orders', component:MyOrdersComponent,canActivate:[AuthGuard]},
      {path:'check-out', component:CheckOutComponent,canActivate:[AuthGuard]},
      {path:'order-success', component:OrderSuccessComponent,canActivate:[AuthGuard]},
     
      {path:'admin/products/new', component:ProductFormComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/products/:id', component:ProductFormComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/products', component:AdminProductsComponent,canActivate:[AuthGuard,AdminAuthGuard]},


      {path:'admin/orders', component:AdminOrdersComponent,canActivate:[AuthGuard,AdminAuthGuard]},
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
