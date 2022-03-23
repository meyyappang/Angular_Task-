import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveguardGuard } from './activeguard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtUrlResolverService } from './ext-url-resolver.service';
import { GitAuthComponent } from './git-auth/git-auth.component';
// import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { NoSuchComponent } from './no-such/no-such.component';
import { RedirectComponent } from './redirect/redirect.component';
import { TaskComponent } from './task/task.component';
import { TodoComponent } from './todo/todo.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [{
  path:'todo',
  component:TodoComponent
},

{
path:'',
component:LoginComponent
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
  loadChildren:()=> import("./list/list.module").then(m=> m.ListModule),canActivate:[ActiveguardGuard]
},
{
  path:"",
  pathMatch:"full",
  redirectTo:'login'
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path: 'test',
  component: GitAuthComponent,
  resolve: {
      url: ExtUrlResolverService
  }
},
{
path:'redirect',
component:RedirectComponent
},
{
path:'**',
component:NoSuchComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
