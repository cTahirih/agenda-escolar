import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @HostBinding('class') class = 'w-100';
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]],
      rememberUser: [false]
    });
  }

  register() {
    if (this.registerForm.valid) {

      this.loginService.registerUser({
        confirmPass: this.registerForm.value.confirmPass,
        lastName: this.registerForm.value.lastName,
        name: this.registerForm.value.name,
        pass: this.registerForm.value.pass,
        phoneNumber: this.registerForm.value.phoneNumber,
        userName: this.registerForm.value.userName
      })
        .subscribe(
          () => {

            if (this.getFormControlRememberUser.value) {
              localStorage.setItem('userName', this.registerForm.value.userName);
            }
            this.router.navigateByUrl('/dashboard/home');
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

  get getFormControlRememberUser() {
    return this.registerForm.get('rememberUser') as FormControl;
  }

  get formControlName() {
    return this.registerForm.get('name') as FormControl;
  }

  get formControlLastName() {
    return this.registerForm.get('lastName') as FormControl;
  }

  get formControlPhoneNumber() {
    return this.registerForm.get('phoneNumber') as FormControl;
  }

  get formControlPass() {
    return this.registerForm.get('pass') as FormControl;
  }

  get formControlUserName() {
    return this.registerForm.get('userName') as FormControl;
  }

  get formControlConfirmPass() {
    return this.registerForm.get('confirmPass') as FormControl;
  }
}
