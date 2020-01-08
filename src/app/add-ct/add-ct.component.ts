import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../service/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ct',
  templateUrl: './add-ct.component.html',
  styleUrls: ['./add-ct.component.css']
})
export class AddCtComponent implements OnInit {

  ctformlabel = 'Add Contract';
  ctformbtn = 'Save';

  constructor(private formBuilder: FormBuilder, private router: Router, private ctService:ContractService) { }

  addForm: FormGroup;
  btnvisibility = true;
  validation_messages = {
    'ngaylamhopdong': [
      { type: 'required', message: 'Ngày Làm hợp Đồng không được để trống' },
      { type:'pattern',message:'Ngày sinh phải đúng định dạng dd/MM/yyyy'}
    ],
    'ngayketthuc': [
      { type: 'required', message: 'Ngày Kết Thúc hợp Đồng không được để trống' },
      { type:'pattern',message:'Ngày sinh phải đúng định dạng dd/MM/yyyy'}
    ],
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

  };

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      ngaylamhopdong: ['', [Validators.required,Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]],
      ngayketthuc: ['',[Validators.required,Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]],
      tiendaccoc: ['', Validators.required],
      tongtien: ['', Validators.required],
      tendichvu: ['', Validators.required],
      dientich: ['', [Validators.required,Validators.pattern(/^\d+(\.\d+)?$/)]],
      sotang: ['', [Validators.required,Validators.pattern(/^\d+$/)]],
      songuoitoida: ['',[Validators.required,Validators.pattern(/^\d+$/)]],
      chiphithue: ['', [Validators.required,Validators.pattern(/^\d+(\.\d+)?$/)]]

    });
  }
  onSubmit() {
    if(this.addForm.valid){
      this.ctService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-ct']);
        console.log(this.formBuilder)
      },
      error => {
        alert(error);
      });

    }
  }
}
