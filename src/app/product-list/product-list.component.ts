import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product, products} from '../products';
import { RootObject } from '../productsApi';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent {


  constructor(
    private http: HttpClient,
    private cartService: CartService

  ) {}

  products = products;
  productos:any;

  ngOnInit() {
    //llamo a la api de productos 
    this.getApi();
  }

  share() {
    window.alert('The product has been shared!');
  }

  like() {
    window.alert('The product has been added to your favorites list!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  getProductos() {
    return this.http.get<RootObject>('https://fakestoreapi.com/products');
    
  }

  addToCart(product: RootObject) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  getApi(){
    this.productos=this.getProductos();
    console.log(this.productos);
  }
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/