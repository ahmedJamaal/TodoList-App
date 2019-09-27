import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoform =new FormGroup ({
    name : new FormControl(null,[Validators.required]),
    username : new FormControl(null)
  });
  todoList=localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')) : [];
  $todo=[];
  constructor(private userService:UserServiceService) {
  
      
   }

  ngOnInit() {
    this.checkUserTodoList(this.todoList);
  }

  newTodo()
  {
    if(this.todoform.valid)
    {
      this.userService.addTodo(this.todoform.value);
      this.$todo.push(this.todoform.value);
      this.todoform.patchValue({'name': null});
      
    }
    
  }

   checkUserTodoList(todoData) {
     
     for (const todo of todoData) {
       if(this.userService.loggedInUser.username !=null && todo.username === this.userService.loggedInUser.username)
       {
          this.$todo.push(todo);
       }
     }

  }
}
