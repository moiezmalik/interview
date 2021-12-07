import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, subscribeOn, tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class Service{
    private url = "https://randomuser.me/api/?results=50";
    
    public getUsers() {
      return this.http.get(this.url);
    }
    constructor(private http: HttpClient) {
  
    }

}