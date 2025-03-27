import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  loginInitiate: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  
  }

  onInputChange(): void {
    this.loginError = false;
  }

  onLogin(): void {
    this.loginInitiate = true;
    if (this.isFormValid()) {
      if (this.username === 'admin' && this.password === 'admin') {
        localStorage.setItem('uName', this.username);
        localStorage.setItem('authToken', 'dummyToken');
        this.router.navigate(['/home']);
        this.loginInitiate = false;
      } else {
        this.loginError = true;
        this.loginInitiate = false;
      }
    }
  }

  isFormValid(): boolean {
    return this.username.length >= 3 && this.password.length >= 3;
  }
}