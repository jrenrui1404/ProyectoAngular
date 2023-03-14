import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  //toppings = new FormControl('');
  //toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    sr: [''],
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', Validators.required, Validators.minLength(8)],
    terminos: [false, Validators.requiredTrue],
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  borrarProducto(index: number) {
    this.cartService.borrarProducto(index);
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}