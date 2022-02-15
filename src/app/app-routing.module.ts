import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { TodoComponent } from './todo/todo.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [{
  path:'todo',
  component:TodoComponent
},

{
path:'',
component:TodoComponent
},
{
  path:'todo/:id',
  component:TodoComponent
},
{
  path:'task/:id',
  component:TaskComponent
},
{
  path:'login',
  component:LoginComponent
},
{
path:'userprofile',
component:UserprofileComponent
},
{
  path:'list',
  component:ListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
