import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @HostBinding('class') class = 'w-100';
  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.loginService.login(this.loginForm.value).subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigateByUrl('/dashboard/home');
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
          this.loginForm.reset({
            userName: '',
            pass: ''
          });
        }
      );
    }
  }

  get getLoginForm() {
    return this.loginForm.controls;
  }

  get formControlUserName() {
    return this.loginForm.get('userName') as FormControl;
  }

  get formControlPass() {
    return this.loginForm.get('pass') as FormControl;
  }
}
