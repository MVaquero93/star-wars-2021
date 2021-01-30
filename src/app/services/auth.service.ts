import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string) {
    return this.getByUsername(username)
  }

  register(user: User) {
    let userList = this.getUsers()
    userList = [...userList, user];
    localStorage.user = JSON.stringify(user);
    localStorage.users = JSON.stringify(userList);
    this.router.navigate(['/principal/ships']);
  }


  private getUsers() {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }
    return JSON.parse(localStorage.users);
  }

  private getByUsername(username): any {
    return this.getUsers().find((user) => user.username === username);
  }
}
