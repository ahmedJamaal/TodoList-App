import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './service/user-service.service';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
  user = null;
  currentPage='login';
  constructor(private usersService: UserServiceService ,
              private route :ActivatedRoute, private router:Router) {
             
      this.usersService.userEvent.subscribe((ob) => {
      this.user = ob;
    });
  }
  logout()
  {
    this.usersService.logout();
  }
}
