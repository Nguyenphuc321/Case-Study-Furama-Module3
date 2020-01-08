import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/customer/';

  getCustomers() {
    return this.http.get<Customer[]>(this.baseUrl);
  }
  deleteCustomers(id: number) {
    return this.http.delete<Customer[]>(this.baseUrl + id);
  }
  createUser(customer: Customer) {
    return this.http.post(this.baseUrl,customer);
  }
  getCustomerById(id: number) {
    return this.http.get<Customer>(this.baseUrl  + id);
  }
  updateCustomer(customer: Customer ) {
    return this.http.put(this.baseUrl  + customer.id, customer);
  }
}