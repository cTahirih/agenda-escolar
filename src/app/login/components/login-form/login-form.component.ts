import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @HostBinding('class') class = 'w-100';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
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
      this.router.navigateByUrl('/dashboard/home');
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
