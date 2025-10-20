import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  loading = true;
  searchTerm = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        this.filteredCustomers = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading customers:', error);
        this.loading = false;
      }
    });
  }

  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue.toLowerCase();
    this.filteredCustomers = this.customers.filter(customer =>
      customer.firstName.toLowerCase().includes(this.searchTerm) ||
      customer.lastName.toLowerCase().includes(this.searchTerm) ||
      customer.email.toLowerCase().includes(this.searchTerm) ||
      customer.phone.includes(this.searchTerm)
    );
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  getStatusLabel(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  getFullName(customer: Customer): string {
    return `${customer.firstName} ${customer.lastName}`;
  }

  onViewCustomer(customer: Customer): void {
    console.log('View customer:', customer);
  }

  onEditCustomer(customer: Customer): void {
    console.log('Edit customer:', customer);
  }

  onDeleteCustomer(customer: Customer): void {
    console.log('Delete customer:', customer);
  }
}
