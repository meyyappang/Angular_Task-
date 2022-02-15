import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employeemodel } from '../employeemodel.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[EmployeeService]
})
export class TaskComponent implements OnInit {

  id:String='';

  constructor(public employeeService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(new Date().toLocaleDateString());
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
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
  onSubmit(form: NgForm) {
  
    console.log(form.value);
    this.employeeService.createTask(form.value,this.id).subscribe((res) => {
          this.resetForm(form);
          this.refreshEmployeeList();
          alert( 'Saved successfully');
          this.router.navigate(['/list'])
        });
    // if (form.value._id == "") {
    //   this.employeeService.postEmployee(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.refreshEmployeeList();
    //     alert( 'Saved successfully');
    //     this.router.navigate(['/list'])
    //   });
    // }
    // else {
    //   this.employeeService.putEmployee(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.refreshEmployeeList();
    //     alert( 'Updated successfully');
    //     this.router.navigate(['/list'])

      
    //   });
    // }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employeemodel[];
    });
  }



}
