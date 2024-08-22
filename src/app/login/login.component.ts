import { Component, inject } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  token: string | null = null;
  

  constructor(private fb: FormBuilder,private router:Router,private loginService: LoginService) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      deviceId: ['']
    });
  }
  onSubmit() {

    if (this.loginForm.valid) {
      //call authentication service
      this.loginService.login(this.loginForm.value).subscribe((response: any) => {
        // on successfull login
        console.log(response.Token.AccessToken);
        this.saveTokenToLocalStorage(response.Token.AccessToken);
        this.router.navigate(['/admin/dashboard'])
      },
        (error: any) => {
          // Handle login error
        });
    }
  }
  isLoggedIn(): boolean {
    return !!this.token;
  }
  saveTokenToLocalStorage(token: string) {
    this.token = token;
    localStorage.setItem('auth_Token', token);
  }
}
