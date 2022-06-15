import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service/service.service';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WordComponent } from './pages/word/word.component';
import { DetailComponent } from './pages/detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomepageComponent,
    ProductsDetailComponent,
    ProductsAddComponent,
    ProductEditComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    BlogComponent,
    WordComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }