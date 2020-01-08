import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../service/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-ct',
  templateUrl: './edit-ct.component.html',
  styleUrls: ['./edit-ct.component.css']
})
export class EditCtComponent implements OnInit {

  ctformlabel = 'Edit Contract';
  ctformbtn = 'Update';

  constructor(private formBuilder: FormBuilder, private router: Router, private ctService: ContractService) { }

  editForm: FormGroup;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      ngaylamhopdong: ['', Validators.required],
      ngayketthuc: ['', Validators.required],
      tiendaccoc: ['', Validators.required],
      tongtien: ['', Validators.required],
      tendichvu: ['', Validators.required],
      dientich: ['', [Validators.required,Validators.pattern(/^\d+(\.\d+)?$/)]],
      sotang: ['', [Validators.required,Validators.pattern(/^\d+$/)]],
      songuoitoida: ['',[Validators.required,Validators.pattern(/^\d+$/)]],
      chiphithue: ['', [Validators.required,Validators.pattern(/^\d+(\.\d+)?$/)]]
      
    });

    const ctid = localStorage.getItem('editCtId');
    if (+ctid > 0) {
      this.ctService.getContractById(+ctid).subscribe(data => {
        this.editForm.patchValue(data);
      });
    }
  }
  onUpdate() {
    this.ctService.updateContract(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-ct']);
      console.log(this.formBuilder)
    },
      error => {
        alert(error);
     });
  }

}
