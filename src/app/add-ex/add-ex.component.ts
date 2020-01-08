import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExecutiveService } from '../service/executive.service';


@Component({
  selector: 'app-add-ex',
  templateUrl: './add-ex.component.html',
  styleUrls: ['./add-ex.component.css']
})
export class AddExComponent implements OnInit {

  exformlabel = 'Add Executive';
  exformbtn = 'Save';

  constructor(private formBuilder: FormBuilder, private router: Router, private exService:ExecutiveService ) { }
  addForm: FormGroup;
  btnvisibility = true;
  validation_messages = {
    'tendichvu': [
      { type: 'required', message: 'Tên không được để trống' }
    ],
    'dientich': [
       { type: 'required', message: 'Diện tích không được để trống' },
       {type: 'pattern',message:'Diện tích phải là số dương'}
    ],
    'chiphithue': [
      { type: 'required', message: 'Phí thuê không được để trống' },
      {type: 'pattern',message:'Phí thuê phải là số dương'}
    ],
    'sotang': [
      { type: 'required', message: 'số tầng không được để trống' },
      {type: 'pattern',message:'số tầng  phải là số nguyên dương'}
    ],
    'songuoitoida': [
      { type: 'required', message: 'số người tối đa không được để trống' },
      {type: 'pattern',message:'số tầng  phải là số nguyên dương'}
    ],
  }

  


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      tendichvu: ['', Validators.required],
      dientich: ['', [Validators.required,Validators.pattern(/^\d+(\.\d+)?$/)]],
      sotang: ['', [Validators.required,Validators.pattern(/^\d+$/)]],
      songuoitoida: ['',[Validators.required,Validators.pattern(/^\d+$/)]],
      chiphithue: ['', [Validators.required,Validators.pattern(/^\d+(\.\d+)?$/)]]

    });
  }
  onSubmit() {
    if(this.addForm.valid){
      this.exService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-ex']);
        console.log(this.formBuilder)
      },
      error => {
        alert(error);
      });

    } 
  }
  
}

