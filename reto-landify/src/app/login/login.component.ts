import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
      password: ['', [Validators.required, this.validatePassword]],
    });
  }

  ngOnInit(): void {}

  validateEmail(control: any) {
    const email = control.value;
    if (email === 'prueba@gmail.com') {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

  validatePassword(control: any) {
    const password = control.value;
    if (password === '1234') {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.router.navigate(['/tableUsers']);
    }
  }
}
