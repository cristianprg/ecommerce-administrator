import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private jsonUrl = 'assets/data/customers.json';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<{ customers: Customer[] }>(this.jsonUrl).pipe(
      map(response => response.customers),
      catchError(error => {
        console.error('Error loading customers:', error);
        return of([]);
      })
    );
  }

  getCustomerById(id: number): Observable<Customer | undefined> {
    return this.getCustomers().pipe(
      map(customers => customers.find(c => c.id === id))
    );
  }
}
