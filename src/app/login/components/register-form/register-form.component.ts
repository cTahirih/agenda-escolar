import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../login-form/login-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @HostBinding('class') class = 'w-100';
  registerForm: FormGroup;
  stepForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.stepForm = this.fb.group({
      firstForm: ['', [Validators.required]],
      secondForm: ['', [Validators.required]],
    });
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  get getRegisterForm() {
    return this.registerForm.controls;
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
