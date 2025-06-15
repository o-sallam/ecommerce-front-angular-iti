import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchTerm:string='';
  constructor(private router: Router) {}
 onSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/products'], {
        queryParams: { search: this.searchTerm }
      });
    }
  }

  //product.component.ts
  //this.searchService.search$.subscribe(term => {
//   this.searchTerm = term;
//   this.filterProducts();
// });

}


