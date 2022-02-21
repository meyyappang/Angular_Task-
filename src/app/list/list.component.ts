import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employeemodel } from '../employeemodel.model';
import { OAuthService } from '../oauth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[EmployeeService]
})
export class ListComponent implements OnInit {
  username: any;

  constructor(public employeeService:EmployeeService,private router:Router,private serv:OAuthService) { }

  ngOnInit(): void {
    this.serv.getUserDetails(localStorage.getItem('Token')).subscribe({ next: data=>this.username=data["login"], error: err=>{console.log(err)}});
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null,
      DT:new Date().toLocaleDateString(),
      username:"",
      pwd:"",
      task:"",
      desc:""
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employeemodel[];
    });
  }

  onEdit(id) {
    this.router.navigate(['/todo',id])
  }
  onTask(id) {
    this.router.navigate(['/task',id])
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        // this.resetForm(form);
        alert( 'Deleted successfully');
      });
    }
  }

}
