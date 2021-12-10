import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './../details/details.component';
import {BrandComponent} from './../brand/brand.component';
import {CategoryComponent} from './../category/category.component';
import {ProductsComponent} from './../products/products.component';
import {AuthorsComponent} from './../authors/authors.component';
import {AllComponent} from './../all/all.component';
import {ReviewsComponent} from './../reviews/reviews.component';

let routes: Routes = [
  {path: 'products', component: ProductsComponent, 
  children:[
    {path: 'details/:id', component: DetailsComponent},
    {path: 'brand/:brand', component: BrandComponent},
    {path: 'category/:cat', component: CategoryComponent},
  ]},

  {path: 'reviews', component: ReviewsComponent, 
  children:[
    {path: 'author/:id', component: AuthorsComponent},
    {path: 'all/:id', component: AllComponent},
    {path: 'details/:id', component: DetailsComponent},
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
