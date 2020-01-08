import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cus',
  templateUrl: './list-cus.component.html',
  styleUrls: ['./list-cus.component.css']
})
export class ListCusComponent implements OnInit {

  customers: Customer[];
  p=1;
  key: string;

  constructor(private cusService: CustomerService, private router: Router,) { }

  ngOnInit() {
    this.cusService.getCustomers()
    .subscribe((data: Customer[]) => {
      this.customers = data;
      console.log(this.customers)
    });
  }
  deleteCus(customer: Customer): void {
    if (confirm('Bạn có chắc muốn xóa một khách hàng nào đó không ' + customer.id + '?')){
      this.cusService.deleteCustomers(customer.id)
      .subscribe(data => {
        this.customers = this.customers.filter(u => u !== customer);
      });
  }
}
  editCus(customer: Customer): void {
    localStorage.removeItem('editCusId');
    localStorage.setItem('editCusId', customer.id.toString());
    this.router.navigate(['update-cus']);
  }
  addCus(): void {
    localStorage.removeItem('editCusId');
    this.router.navigate(['add-cus']);
  }
}
