import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Executive } from '../model/executive.model';


@Injectable({
  providedIn: 'root'
})
export class ExecutiveService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/executive/';

  getExecutive() {
    return this.http.get<Executive[]>(this.baseUrl);
  }
  deleteExecutive(id: number) {
    return this.http.delete<Executive[]>(this.baseUrl + id);
  }
  createUser(executive: Executive) {
    return this.http.post(this.baseUrl, executive);
  }
  getExecutiveById(id: number) {
    return this.http.get<Executive>(this.baseUrl  + id);
  }
  updateExecutive(executive: Executive) {
    return this.http.put(this.baseUrl  + executive.id, executive);
  }
}