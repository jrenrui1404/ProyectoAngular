import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { RootObject } from '../productsApi';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: RootObject | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    //this.product = products.find(product => product.id === productIdFromRoute);

    const productId = this.route.snapshot.paramMap.get('productId');
    this.http
      .get<RootObject>(`https://fakestoreapi.com/products/${productId}`)
      .subscribe((product) => {
        this.product = product;
      });
  }

  addToCart(product: RootObject) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}



