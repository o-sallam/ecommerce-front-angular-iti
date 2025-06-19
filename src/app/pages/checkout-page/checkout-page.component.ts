import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { CartItem } from '../../models/cart-item.model';
import { Order, OrderItem, ShippingAddress } from '../../models/order.model';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  checkoutForm: FormGroup;
  cartItems: CartItem[] = [];
  total: number = 0;
  totalItems: number = 0;
  loading: boolean = false;
  orderPlaced: boolean = false;
  orderId: string = '';

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['United Kingdom', Validators.required],
      paymentMethod: ['card', Validators.required],
      cardNumber: [''],
      expiryDate: [''],
      cvv: [''],
      cardName: [''],
    });
  }

  ngOnInit(): void {
    this.loadCart();
    this.setupPaymentValidation();
  }

  loadCart(): void {
    this.cartService.getCart().subscribe({
      next: (cart) => {
        this.cartItems = cart.items;
        this.total = cart.total;
        this.totalItems = cart.totalItems;
      },
      error: (err) => {
        console.error('Error loading cart:', err);
      },
    });
  }

  setupPaymentValidation(): void {
    this.checkoutForm.get('paymentMethod')?.valueChanges.subscribe((method) => {
      const cardFields = ['cardNumber', 'expiryDate', 'cvv', 'cardName'];

      if (method === 'card') {
        cardFields.forEach((field) => {
          this.checkoutForm.get(field)?.setValidators([Validators.required]);
        });
      } else {
        cardFields.forEach((field) => {
          this.checkoutForm.get(field)?.clearValidators();
        });
      }

      cardFields.forEach((field) => {
        this.checkoutForm.get(field)?.updateValueAndValidity();
      });
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.invalid || this.cartItems.length === 0) return;

    this.loading = true;

    const formData = this.checkoutForm.value;

    const shippingAddress: ShippingAddress = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      country: formData.country,
    };

    const orderItems: OrderItem[] = this.cartItems.map((item) => ({
      productId: item.productId.id,
      quantity: item.quantity,
      price: item.price,
    }));

    const order: Order = {
      items: orderItems,
      shippingAddress,
      paymentMethod: formData.paymentMethod,
      total: this.finalTotal,
      status: 'pending',
    };

    this.orderService.createOrder(order).subscribe({
      next: (response) => {
        this.loading = false;
        this.orderPlaced = true;
        this.orderId = response.orderId || 'ORDER-' + Date.now();

        setTimeout(() => {
          this.router.navigate(['/order-confirmation'], {
            queryParams: { orderId: this.orderId },
          });
        }, 3000);
      },
      error: (err) => {
        this.loading = false;
        console.error('Order error:', err);
        alert('Failed to place order. Please try again.');
      },
    });
  }

  get shippingCost(): number {
    return this.total > 100 ? 0 : 9.99;
  }

  get finalTotal(): number {
    return this.total + this.shippingCost;
  }
}
