import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { CollectionsComponent } from './components/pages/collections/collections.component';
import { StoreComponent } from './components/pages/store/store.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FindStoreComponent } from './components/pages/find-store/find-store.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    CategoriesComponent,
    CollectionsComponent,
    StoreComponent,
    HomepageComponent,
    FindStoreComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
