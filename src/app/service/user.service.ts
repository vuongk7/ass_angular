import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  signup(user:IUser) {
    return this.http.post<IUser>(`http://localhost:3000/users`,user);
  }
  signin(user:IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3000/signin`,user);
  }
}
