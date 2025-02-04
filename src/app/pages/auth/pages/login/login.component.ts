import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder,private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/me']);
        alert('Login successful!');
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Login error:', error);
      },
    });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().subscribe({
      next: () => {
        alert('Login successful!');
        this.router.navigate(['/me']);
      },
      error: (error) => {
        console.error('Login error:', error);
      },
    });
  }
}
