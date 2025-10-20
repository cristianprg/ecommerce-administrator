import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  loading = true;
  searchTerm = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.loading = false;
      }
    });
  }

  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm) ||
      product.sku.toLowerCase().includes(this.searchTerm) ||
      product.brand.toLowerCase().includes(this.searchTerm) ||
      product.category.toLowerCase().includes(this.searchTerm) ||
      product.description.toLowerCase().includes(this.searchTerm)
    );
  }

  getStockStatus(product: Product): string {
    if (product.stock === 0) return $localize`:@@productsStockOut:Out of Stock`;
    if (product.stock <= product.lowStockThreshold) return $localize`:@@productsStockLow:Low Stock`;
    return $localize`:@@productsStockIn:In Stock`;
  }

  getStockClass(product: Product): string {
    if (product.stock === 0) return 'out-of-stock';
    if (product.stock <= product.lowStockThreshold) return 'low-stock';
    return 'in-stock';
  }

  onEdit(product: Product): void {
    console.log('Edit product:', product);
    // Add your edit logic here
  }

  onView(product: Product): void {
    console.log('View product:', product);
    // Add your view logic here
  }

  onDelete(product: Product): void {
    console.log('Delete product:', product);
    // Add your delete logic here
  }

  onAddProduct(): void {
    console.log('Add new product');
    // Add your add product logic here
  }
}
