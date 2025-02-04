import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder,private router: Router, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isLoading = true;

    const { username, email, password } = this.registerForm.getRawValue();

    this.authService.register(username, email, password).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/me']);
        this.isLoading = false;
      },
      (error) => {
        console.error('Registration failed:', error);
        this.isLoading = false;
      }
    );
  }

  registerWithGoogle(){
    this.authService.registerWithGoogle().subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/me']);
        this.isLoading = false;
      },
      (error) => {
        console.error('Registration failed:', error);
        this.isLoading = false;
      }
    );
  }
}
