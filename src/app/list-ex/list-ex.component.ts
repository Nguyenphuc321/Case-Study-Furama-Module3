import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Executive } from '../model/executive.model';
import { ExecutiveService } from '../service/executive.service';

@Component({
  selector: 'app-list-ex',
  templateUrl: './list-ex.component.html',
  styleUrls: ['./list-ex.component.css']
})
export class ListExComponent implements OnInit {
  executives: Executive[];
  p=1;
  key: string;

  constructor(private exService: ExecutiveService, private router: Router,) { }

  ngOnInit() {
    this.exService.getExecutive()
    .subscribe((data: Executive[]) => {
      this.executives = data;
    });
  }
  editEx(executive: Executive): void {
    localStorage.removeItem('editExId');
    localStorage.setItem('editExId', executive.id.toString());
    this.router.navigate(['update-ex']);
  }
  addEx(): void {
    localStorage.removeItem('editExId');
    this.router.navigate(['add-ex']);
  }
  deleteEx(executive: Executive):
   void {
    if (confirm('Bạn có chắc muốn xóa dich vu ' + executive.id + '?')) {
    this.exService.deleteExecutive(executive.id)
      .subscribe(data => {
        this.executives = this.executives.filter(u => u !== executive);
      });
    }
  }
}
