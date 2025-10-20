import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProducts = 0;
  totalOrders = 1247;
  totalCustomers = 3856;
  totalRevenue = 45678.90;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.totalProducts = products.length;
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }
}
