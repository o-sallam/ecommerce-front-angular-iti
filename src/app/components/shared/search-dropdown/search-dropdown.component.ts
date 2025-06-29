import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  takeUntil,
} from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SearchDropdownComponent implements OnInit, OnDestroy, OnChanges {
  @Input() searchQuery: string = '';
  @Input() isVisible: boolean = false;
  @Output() itemSelected = new EventEmitter<void>();

  searchResults: Product[] = [];
  isLoading: boolean = false;
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    // Set up search with debouncing
    this.searchSubject
      .pipe(
        debounceTime(300), // Wait 300ms after user stops typing
        distinctUntilChanged(), // Only search if query changed
        switchMap((query) => {
          if (query.trim().length < 2) {
            return [];
          }
          this.isLoading = true;
          return this.productService.getAllProducts();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (products: Product[]) => {
          this.isLoading = false;
          if (this.searchQuery.trim().length >= 2) {
            this.searchResults = this.filterProducts(
              products,
              this.searchQuery
            );
          } else {
            this.searchResults = [];
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Search error:', error);
          this.searchResults = [];
        },
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery'] && this.searchQuery) {
      this.onSearchQueryChange();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchQueryChange(): void {
    this.searchSubject.next(this.searchQuery);
  }

  private filterProducts(products: Product[], query: string): Product[] {
    const searchTerm = query.toLowerCase().trim();
    return products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      )
      .slice(0, 5); // Limit to 5 results
  }

  selectItem(product: Product): void {
    this.router.navigate(['/products', product.id]);
    this.itemSelected.emit();
  }

  onViewAllResults(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/products'], {
        queryParams: { search: this.searchQuery.trim() },
      });
      this.itemSelected.emit();
    }
  }

  getProductImage(product: Product): string {
    return (
      product.thumbnail ||
      product.images[0] ||
      'assets/images/default-category.webp'
    );
  }
}
