import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  student1 = [
    {
      stuid : 101,
      stuname : "Ram",
      stucity : "Pune",
      course : "Java"
    },
    {
      stuid : 102,
      stuname : "Shyam",
      stucity : "Delhi",
      course : "Angular"
    },
    {
      stuid : 103,
      stuname : "Sita",
      stucity : "Mumbai",
      course : "CSS"
    }
  ]
}
