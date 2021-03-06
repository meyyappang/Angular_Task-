import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employeemodel } from '../employeemodel.model';
import { OAuthService } from '../oauth.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[EmployeeService]
})
export class TodoComponent implements OnInit {
  id:String='';
  username: any;
  today:Date=new Date();
  
  

  constructor(public employeeService:EmployeeService,private serv:OAuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.serv.getUserDetails(localStorage.getItem('Token')).subscribe({ next: data=>this.username=data["login"], error: err=>{console.log(err)}});
    console.log(new Date().toLocaleDateString());
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    
    if(this.id !== null)
    {
      var em;
      this.employeeService.getEmployee(this.id).subscribe((data)=>{
        em = data
        console.log(em);
        this.onEdit(em)
      });
      

    }

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
      DT:this.today,
      username:"",
      pwd:"",
      task:"",
      desc:""
    }
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        alert( 'Saved successfully');
        this.router.navigate(['/list'])
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        alert( 'Updated successfully');
        this.router.navigate(['/list'])

      
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employeemodel[];
    });
  }

  onEdit(emp) {
    console.log(emp);
    
    this.employeeService.selectedEmployee = emp;
  }

  logout()
{
  this.serv.logout().subscribe(data=>this.router.navigate(['/login']),err=>{console.log( err)});


  localStorage.removeItem('Token')
}


  // onDelete(_id: string, form: NgForm) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.employeeService.deleteEmployee(_id).subscribe((res) => {
  //       this.refreshEmployeeList();
  //       this.resetForm(form);
  //       alert( 'Deleted successfully');
  //     });
  //   }
  // }

}
