import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cus',
  templateUrl: './add-cus.component.html',
  styleUrls: ['./add-cus.component.css']
})
export class AddCusComponent implements OnInit {

  cusformlabel = 'Add Customer';
  cusformbtn = 'Save';

  constructor(private formBuilder: FormBuilder, private router: Router, private cusService: CustomerService) { }

  addForm: FormGroup;
  btnvisibility = true;
  validation_messages = {
    'hoTen': [
      { type: 'required', message: 'Tên không được để trống' }
    ],
    'maKH': [
      { type: 'required', message: 'Mã khách hàng không được để trống' },
      { type: 'pattern', message: 'Mã khách hàng không đúng định dạng KH-XXXX với X là number' }
    ],
    'loaiKhach': [
      { type: 'required', message: 'Loại khách không được để trống' },
    ],
    'ngaySinh': [
      { type: 'required', message: 'Ngày sinh không được để trống' },
      { type:'pattern',message:'Ngày sinh phải đúng định dạng dd/MM/yyyy'}
    ],
    'cmnd': [
      { type: 'required', message: 'CMND không được để trống' },
      { type: 'pattern', message: 'CMND không đúng định dạng' }
    ],
    'sdt': [
      { type: 'required', message: 'SDT không được để trống' },
      { type:'pattern',message:"Số điện thoại không đúng định dạng"}
    ],
    'email': [
      { type: 'required', message: 'Email không được để trống' },
      { type: 'pattern', message: 'Email không đúng định dạng abc@abc.abc' }
    ],
    'diaChi': [
      { type: 'required', message: 'Địa chỉ không được để trống' },
    ]
  };
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.maxLength(3)]],
      ngaysinh: ['', [Validators.required,Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]],
      email: ['',[Validators.required,Validators.pattern(/\S+@\S+\.\S+/)]],
      address: ['', Validators.required],
    });

  }
  onSubmit() {
    if(this.addForm.valid){
      this.cusService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-cus']);
        console.log(this.formBuilder)
      },
      error => {
        alert(error);
      });

    }
    }
  }
  
