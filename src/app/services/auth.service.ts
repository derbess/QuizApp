import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {

    return this.http.post(`${this.BASE_URL}/auth/login`, {username, password});
  }

  register(newUser: User) {
    return this.http.post(`${this.BASE_URL}/auth/signup`, newUser);
  }

  getAllUsers() {
    return this.http.get(`${this.BASE_URL}/auth/users`);
  }
  
}