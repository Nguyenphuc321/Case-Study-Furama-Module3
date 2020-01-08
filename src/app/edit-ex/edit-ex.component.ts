import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExecutiveService } from '../service/executive.service';


@Component({
  selector: 'app-edit-ex',
  templateUrl: './edit-ex.component.html',
  styleUrls: ['./edit-ex.component.css']
})
export class EditExComponent implements OnInit {

  exformlabel = 'Edit Executive';
  exformbtn = 'Update';

  constructor(private formBuilder: FormBuilder, private router: Router, private exService: ExecutiveService) { }

  editForm: FormGroup;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      tendichvu: ['', Validators.required],
      dientich: ['', Validators.required],
      sotang: ['', Validators.required],
      songuoitoida: ['', Validators.required],
      chiphithue: ['', Validators.required],
     
    });

    const exid = localStorage.getItem('editExId');
    if (+exid > 0) {
      this.exService.getExecutiveById(+exid).subscribe(data => {
        this.editForm.patchValue(data);
      });
    }
  }
  onUpdate() {
    this.exService.updateExecutive(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-ex']);
      console.log(this.formBuilder)
    },
      error => {
        alert(error);
      });
  }

}
