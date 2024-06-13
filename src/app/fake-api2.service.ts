import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FakeApi2Service {

  constructor(private http:HttpClient) { }

  getJsonData()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
  }
}
