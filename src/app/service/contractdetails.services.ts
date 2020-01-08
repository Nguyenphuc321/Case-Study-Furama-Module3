import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContractDetalis } from '../model/contractdetails.model';


@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {
  

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/contractdetails/';

  getContractDetalis() {
    return this.http.get<ContractDetalis[]>(this.baseUrl);
  }
  deleteContractDetalis(id: number) {
    return this.http.delete<ContractDetalis[]>(this.baseUrl + id);
  }
  createUserDetalis(contractdetails: ContractDetalis) {
    return this.http.post(this.baseUrl,contractdetails);
  }
  getContractDetalisById(id: number) {
    return this.http.get<ContractDetalis>(this.baseUrl  + id);
  }
  updateContractDetalis(contractdetails: ContractDetalis ) {
    return this.http.put(this.baseUrl  + contractdetails.id, contractdetails);
  }
}