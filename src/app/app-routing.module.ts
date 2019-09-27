import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'' ,  redirectTo: 'todolist', pathMatch: 'full'},
  {path:'todolist' , component:HomeComponent , canActivate:[AuthGuard] },
  {path:'todolist' , component:HomeComponent },
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }