import { Component } from '@angular/core';
import { FakeApiService } from './fake-api.service';
import { FakeApi2Service } from './fake-api2.service';
import { FakeApi3Service } from './fake-api3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticalTask';

  // name="John";
  // age=23;
  // m1 = 45;
  // m2 = 60;
  // m3 = 84;

  // courses=[
  //   {
  //     cid : 121,
  //     cname : "CSS"
  //   },
  //   {
  //     cid : 101,
  //     cname : "HTML"
  //   },
  //   {
  //     cid : 121,
  //     cname : "Java"
  //   },
  //   {
  //     cid : 121,
  //     cname : "Python"
  //   },
  //   {
  //     cid : 121,
  //     cname : "Angular"
  //   },

  // ]

  //1st api calling
  // data:any
  // constructor(private service:FakeApiService){}

  // getData()
  // {
  //   this.service.getJsonData().subscribe((info:any)=>{
  //   // console.log(info)

  //    this.data = info[0];
  //    console.log(this.data);

  //   })
  // }

  //2nd api calling
  // data1:any
  // constructor(private service1:FakeApi2Service){}

  //  getData(){
  //   this.service1.getJsonData().subscribe((info1:any)=>{
  //    // console.log(info1);
  //      this.data1 = info1[0];
  //      console.log(this.data1);
  //   })
  //  }

   //3rd api calling
   data3:any
  constructor(private service3:FakeApi3Service){}

   getData(){
    this.service3.getJsonData().subscribe((info3:any)=>{
     // console.log(info1);
       this.data3 = info3[0];
       console.log(this.data3);
    })
   }
}


