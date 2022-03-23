import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employeemodel } from '../employeemodel.model';
import { OAuthService } from '../oauth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers:[EmployeeService]
})
export class UserprofileComponent implements OnInit {
  

  isLoggedIn$: Observable<boolean>;
  username: any;

  constructor(public employeeService:EmployeeService,private router:Router,private serv:OAuthService) { }

  ngOnInit() {
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

  logout()
{
  this.serv.logout().subscribe(data=>this.router.navigate(['/login']),err=>{console.log( err)});


  localStorage.removeItem('Token')
}
 
 

}
