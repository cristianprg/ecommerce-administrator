import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private jsonUrl = 'assets/data/orders.json';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<{ orders: Order[] }>(this.jsonUrl).pipe(
      map(response => response.orders),
      catchError(error => {
        console.error('Error loading orders:', error);
        return of([]);
      })
    );
  }

  getOrderById(id: number): Observable<Order | undefined> {
    return this.getOrders().pipe(
      map(orders => orders.find(o => o.id === id))
    );
  }
}
