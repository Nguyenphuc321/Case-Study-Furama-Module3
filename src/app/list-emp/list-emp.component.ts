import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  employees: Employee[];
  p=1;
  key: string;
  constructor(private empService: EmployeeService, private router: Router,) { }

  ngOnInit() {
    this.empService.getEmployees()
    .subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
  deleteEmp(employee: Employee): void {

    if (confirm('Bạn có chắc muốn xóa một nhân viên nào đó không ' + employee.id + '?')){
      this.empService.deleteEmployees(employee.id)
      .subscribe(data => {
        this.employees = this.employees.filter(u => u !== employee);
      });
  }
  }
  editEmp(employee: Employee): void {
    localStorage.removeItem('editEmpId');
    localStorage.setItem('editEmpId', employee.id.toString());
    this.router.navigate(['update-emp']);
  }

  addEmp(): void {
    localStorage.removeItem('editEmpId');
    this.router.navigate(['add-emp']);
  }

}
