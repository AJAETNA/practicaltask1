import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path:'student',component:StudentComponent  
  // },
  // {
  //   path:'employee',component:EmployeeComponent
  // },
  // {
  //   path:'user',component:UserComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
