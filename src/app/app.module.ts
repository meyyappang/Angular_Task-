import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { EmployeemodelModel } from './employeemodel/employeemodel.model';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ErrorComponent } from './error/error.component';
import { NoSuchComponent } from './no-such/no-such.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorHandlingInterceptorService } from './error-handling-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    EmployeemodelModel,
    ListComponent,
    TaskComponent,
    LoginComponent,
    UserprofileComponent,
    GitAuthComponent,
    RedirectComponent,
    ErrorComponent,
    NoSuchComponent,
    DashboardComponent

    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientXsrfModule
    
  
  
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorHandlingInterceptorService,
      multi:true
  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
