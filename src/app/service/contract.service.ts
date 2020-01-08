import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../model/contract.model';


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/contract/';

  getContract() {
    return this.http.get<Contract[]>(this.baseUrl);
  }
  deleteContract(id: number) {
    return this.http.delete<Contract[]>(this.baseUrl + id);
  }
  createUser(contract: Contract) {
    return this.http.post(this.baseUrl,contract);
  }
  getContractById(id: number) {
    return this.http.get<Contract>(this.baseUrl  + id);
  }
  updateContract(contract: Contract ) {
    return this.http.put(this.baseUrl  + contract.id, contract);
  }
}