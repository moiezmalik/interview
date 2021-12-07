import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, subscribeOn, tap } from 'rxjs/operators'
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview';
  users: any;
  usersList = [];
  
 
  constructor(public usersData: Service, private http: HttpClient) {

  }
  ngOnInit() {
    this.usersData.getUsers().subscribe((users)=> {
      this.users = users;
      this.users =  this.users.results;
    })

  }

}
