import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/products-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent  implements OnInit {
  products: ProductsInterface[] = [];


  constructor( private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>{
      this.products = products;
    });
  }


}
