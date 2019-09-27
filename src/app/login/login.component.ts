import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  massage:string;
  loginForm =new FormGroup ({
    username : new FormControl(null,[Validators.required]),
    password : new FormControl(null,[Validators.required]),
  });
  constructor(private userService : UserServiceService ,
              private router:Router ) { }

  ngOnInit() {
  }
  login()
  {
    if(this.loginForm.valid)
    {
      const user= this.userService.login(this.loginForm.get('username').value,this.loginForm.get('password').value);
      if (typeof(user) == "undefined"){
        this.massage='Wrong Username or Password';
        
        
      }
      else{
        console.log(user);
        this.router.navigate(['/']);
      }

      
    }
   
  }
}
