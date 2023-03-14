import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';
import { RootObject } from './productsApi';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: RootObject[] = [];
/* . . . */

constructor(
  private http: HttpClient
) {}

  addToCart(product: RootObject) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  borrarProducto(index:number){
    this.items.splice ( index, 1);
  }

}