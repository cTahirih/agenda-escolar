import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRouting } from './login.routing';
import { LoginAsideComponent } from './components/login-aside/login-aside.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SharedModule } from '../shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent, LoginFormComponent, LoginAsideComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    LoginRouting,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    SharedModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
