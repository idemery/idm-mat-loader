import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'idm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idm-mat-loader-library';

  result: any;

  constructor(private httpClient: HttpClient) {
  }

  Get() {
    this.httpClient.get('https://reqres.in/api/users?delay=1').subscribe(x => this.result = x);
  }

  SuccessPost() {
    this.httpClient.post('https://reqres.in/api/users?delay=1', {
        "name": "morpheus",
        "job": "leader"
    }).subscribe(x => this.result = x);
  }

  FailPost() {
    this.httpClient.post('https://reqres.in/api/register?delay=1', {
      "email": "sydney@fife"
  }).subscribe(x => console.log(x), err => this.result = err);
  }
}
