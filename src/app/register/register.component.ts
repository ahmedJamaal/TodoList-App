import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm =new FormGroup ({
    name : new FormControl(null,[Validators.required]),
    username : new FormControl(null,[Validators.required]),
    password : new FormControl(null,[Validators.required]),
    repassword : new FormControl(null,[Validators.required])
    
  });
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
  }
  register(){
    if(this.registerForm.valid && this.registerForm.get('password').value === this.registerForm.get('repassword').value)
    {
      this.userService.register(this.registerForm.value);
    }
    
  }
}
