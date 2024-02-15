import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/products-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
  export class ProductListComponent implements OnInit{
    products: ProductsInterface[] = [];

    constructor (private productService: ProductService){}

    ngOnInit(): void {
      this.productService.getProducts().subscribe(products => {
        this.products = products;
      });

  }
}