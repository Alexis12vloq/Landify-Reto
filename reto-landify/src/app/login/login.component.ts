import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as yup from 'yup';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; // Asegúrate de que loginForm esté definido

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Asocia 'email' a un control de formulario
      password: ['', Validators.required], // Asocia 'password' a un control de formulario si es necesario
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      // Realiza la acción de inicio de sesión, como enviar los datos al servidor
    }
  }
}
