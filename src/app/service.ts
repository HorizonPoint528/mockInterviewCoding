import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://reqres.in/api/users?per_page=5'

  constructor(private http: HttpClient) { }


  getUsers(): Observable<{data : user[]}>{
    return this.http.get<{ data: user[] }>(this.url)
  }
}