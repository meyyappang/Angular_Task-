import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employeemodel } from './employeemodel.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmployeeService {
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }
  selectedEmployee: Employeemodel;
  employees: Employeemodel[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employeemodel) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employeemodel) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  getEmployee(id){
    return this.http.get(this.baseURL+`/${id}`)
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  createTask(x,_id){
    return this.http.put(this.baseURL+`/tasks/${_id}`,x);
  }
  

}