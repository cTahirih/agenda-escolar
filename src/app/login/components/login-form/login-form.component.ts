import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupErrorComponent } from '../../../shared/components/popup-error/popup-error.component';

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
    private loginService: LoginService,
    public dialog: MatDialog
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
          this.router.navigateByUrl('/dashboard/home');
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this.loginForm.reset({
            userName: '',
            pass: ''
          });

          this.openDialog(error.error);
        }
      );
    }
  }

  openDialog(error): void {
    this.dialog.open(PopupErrorComponent, {
      width: '600px',
      data: error
    });
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
