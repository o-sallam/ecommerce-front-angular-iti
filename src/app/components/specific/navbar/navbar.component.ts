import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartCount: number = 0;
  searchTerm:string='';

  username: string | null = null;
  loggedIn: boolean = false;

  constructor(private router: Router, private cartService: CartService, private authService: AuthService) {
    this.updateAuthState();
  }

  ngDoCheck() {
    // Update login state on every change detection cycle
    this.updateAuthState();
  }

  updateAuthState() {
    this.loggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUsername();
  }

  logout() {
    this.authService.logout();
    this.updateAuthState();
    this.router.navigate(['/login']);
  }

//   ngOnInit(): void {
//   }

//  onSearch() {
//     if (this.searchTerm.trim()) {
//       this.router.navigate(['/products'], {
//         queryParams: { search: this.searchTerm }
//       });
//     }
//   }

//   product.component.ts
//   this.searchService.search$.subscribe(term => {
//   this.searchTerm = term;
//   this.filterProducts();
// });
isMenuOpen = false;
  showProductsDropdown = false;
  isCartOpen = false;
  searchQuery = '';
  cartItemCount = 2;

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.cart-container') && !target.closest('.cart-dropdown')) {
      this.isCartOpen = false;
    }
  }
}
