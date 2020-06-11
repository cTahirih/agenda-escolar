import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { INewUser } from '../../interfaces/login.interface';

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
      role: [null, [Validators.required]],
      rememberUser: [false]
    });
  }

  register() {
    if (this.registerForm.valid) {

      const body = this.getBodyRequest(this.registerForm.value.role);

      this.loginService.registerUser(body, this.registerForm.value.role)
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

  getBodyRequest(role: boolean) {
    return {
      name: this.registerForm.value.name,
      lastName: this.registerForm.value.lastName,
      email: 'correo@gmail.com',
      phoneNumber: this.registerForm.value.phoneNumber,
      user: {
        id: null,
        password: this.registerForm.value.pass,
        userName: this.registerForm.value.userName,
        createAt: null,
        status: true,
        role: {
          id: role ? 2 : 4,
          role: role ? 'teacher' : 'tutor',
          status: true
        }
      }
    };
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

  get formControlRole() {
    return this.registerForm.get('role') as FormControl;
  }
}
