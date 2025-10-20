import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  // Sales data
  totalSales = 125680.50;
  salesGrowth = 23.5;
  monthlyRevenue = 45678.90;
  revenueGrowth = 18.2;

  // Product data
  topSellingProducts = [
    { name: 'Wireless Bluetooth Headphones', sales: 342, revenue: 27343.58, trend: 'up' },
    { name: 'Smart Fitness Watch', sales: 285, revenue: 56997.15, trend: 'up' },
    { name: 'Professional Camera Lens 50mm', sales: 156, revenue: 70198.44, trend: 'down' },
    { name: 'Ergonomic Office Chair', sales: 124, revenue: 37198.76, trend: 'up' },
    { name: 'Organic Cotton T-Shirt', sales: 523, revenue: 13069.77, trend: 'up' }
  ];

  // Category performance
  categoryPerformance = [
    { name: 'Electronics', revenue: 89450.25, percentage: 45, color: '#1976d2' },
    { name: 'Clothing', revenue: 42320.15, percentage: 21, color: '#ff9800' },
    { name: 'Furniture', revenue: 38210.50, percentage: 19, color: '#4caf50' },
    { name: 'Sports & Outdoors', revenue: 29800.30, percentage: 15, color: '#9c27b0' }
  ];

  // Customer insights
  newCustomers = 156;
  returningCustomers = 423;
  customerRetentionRate = 73.1;

  // Traffic sources
  trafficSources = [
    { source: 'Direct', visitors: 4523, percentage: 38, color: '#1976d2' },
    { source: 'Organic Search', visitors: 3214, percentage: 27, color: '#4caf50' },
    { source: 'Social Media', visitors: 2156, percentage: 18, color: '#e91e63' },
    { source: 'Referral', visitors: 1234, percentage: 10, color: '#ff9800' },
    { source: 'Email', visitors: 789, percentage: 7, color: '#9c27b0' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
