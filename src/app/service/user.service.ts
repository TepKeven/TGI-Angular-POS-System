import { Injectable } from '@angular/core';
import { User } from '../constant/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = [];

  countUsers(){
    return this.users.length;
  }

  getUser(index:number){
    return this.users[index];
  }

  getUsers(){
    return this.users;
  }

  addUser(user:User){
    this.users.push(user);
  }

  editUser(index:number,user:User){
    this.users[index] = user;
  }

  deleteUser(index:number){
    this.users.splice(index,1);
  }
}
