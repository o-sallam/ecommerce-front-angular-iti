import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartCount: number = 0;
  searchTerm:string='';

  constructor(private router: Router ,private cartService: CartService) {}

//   ngOnInit(): void {
//   }

//  onSearch() {
//     if (this.searchTerm.trim()) {
//       this.router.navigate(['/products'], {
//         queryParams: { search: this.searchTerm }
//       });
//     }
//   }

  //product.component.ts
  //this.searchService.search$.subscribe(term => {
//   this.searchTerm = term;
//   this.filterProducts();
// });
isMenuOpen = false;
  showProductsDropdown = false;
  isCartOpen = false;
  searchQuery = '';
  cartItemCount = 2; 
  cartItems = [
    {
      id: 1,
      name: 'Victorian Dining Chair',
      price: 299.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Antique Coffee Table',
      price: 499.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
    }
  }

  updateQuantity(itemId: number, newQuantity: number) {
    if (newQuantity <= 0) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    } else {
      const item = this.cartItems.find(item => item.id === itemId);
      if (item) {
        item.quantity = newQuantity;
      }
    }
    this.updateCartCount();
  }

  updateCartCount() {
    this.cartItemCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.cart-container') && !target.closest('.cart-dropdown')) {
      this.isCartOpen = false;
    }
  }
}


