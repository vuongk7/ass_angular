import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { HeaderComponent } from './layout/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WordComponent } from './pages/word/word.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path : '',
    component: HomepageComponent
  },
  {
    path: "product",
    component: ProductsComponent
  },
  {
    path: 'detail',
    component: ProductsDetailComponent
  },
  {
    path: 'product/add',
    component: ProductsAddComponent
  },
 {
  path: 'product/edit/:id',
  component: ProductEditComponent
 },
{
  path : 'signup',
  component: SignupComponent
},
{
  path : 'signin',
  component: SigninComponent
},
{
  path : 'blog',
  component: BlogComponent
},
{
  path : 'word',
  component : WordComponent
},
{
  path : 'detailProduct/:id',
  component : DetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }