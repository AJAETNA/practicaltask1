import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee1 = [
    {
      empid : 12,
      empname : "John",
      esal : 42000,
      edeptNo : 5,
      empcity : "Pune"
    },
    {
      empid : 41,
      empname : "Smith",
      esal : 47000,
      edeptNo : 7,
      empcity : "Delhi"
    },
    {
      empid : 25,
      empname : "Rihanna",
      esal : 35000,
      edeptNo : 4,
      empcity : "Nashik"
    },
    {
      empid : 62,
      empname : "Syra",
      esal : 32000,
      edeptNo : 2,
      empcity : "Mumbai"
    },
    {
      empid : 41,
      empname : "Blake",
      esal : 22000,
      edeptNo : 6,
      empcity : "Goa"
    }
  ]
}
