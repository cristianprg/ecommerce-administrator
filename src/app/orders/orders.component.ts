import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  loading = true;
  searchTerm = '';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.filteredOrders = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading orders:', error);
        this.loading = false;
      }
    });
  }

  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue.toLowerCase();
    this.filteredOrders = this.orders.filter(order =>
      order.orderNumber.toLowerCase().includes(this.searchTerm) ||
      order.customerName.toLowerCase().includes(this.searchTerm) ||
      order.customerEmail.toLowerCase().includes(this.searchTerm) ||
      order.status.toLowerCase().includes(this.searchTerm)
    );
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  getStatusLabel(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  onViewOrder(order: Order): void {
    console.log('View order:', order);
  }

  onUpdateStatus(order: Order): void {
    console.log('Update status:', order);
  }

  onCancelOrder(order: Order): void {
    console.log('Cancel order:', order);
  }
}
