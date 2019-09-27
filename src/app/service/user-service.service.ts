import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userEventSubject = new BehaviorSubject(null);
  userEvent = this.userEventSubject.asObservable();

  loggedInUser=null;
  userList=localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];
  todoList=localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')) : [];
  constructor(private router:Router) { }

  register(user){
    this.userList.push(user)
    localStorage.setItem('userData',JSON.stringify(this.userList));
    this.loggedInUser = user;
    this.userEventSubject.next(user);
  }

  login(username, password) {
    
    const user = this.userList.find(u => u.username === username && u.password === password);
    this.loggedInUser = user;
    this.userEventSubject.next(user);
    return user;
  }

  logout() {
    this.loggedInUser = null;
    this.userEventSubject.next(null);
    this.router.navigate(['/login'])
  }

  addTodo(data)
  {
    ///data.username=this.loggedInUser.username;
    data.username=this.loggedInUser.username;
    this.todoList.push(data);
    localStorage.setItem('todoData',JSON.stringify(this.todoList));
   this.userEventSubject.next(data);
  }
}
