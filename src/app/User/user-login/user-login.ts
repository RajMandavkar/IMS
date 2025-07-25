import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {
private http = inject(HttpClient);
  private router = inject(Router); // 👈 Inject Router

  loginData = {
    email: '',
    pass: ''
  };

  onclick() {
    const { email, pass } = this.loginData;

    if (!email || !pass) {
      alert('Please fill in all fields');
      return;
    }

    this.http.get<any[]>(`http://localhost:3000/users?email=${email}&pass=${pass}`).subscribe({
      next: (res) => {
        if (res.length > 0) {
          alert('Login successful');
          this.router.navigate(['/userdash']);
        } else {
          alert('Invalid email or password');
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Something went wrong. Try again later.');
      }
    });
  }
}
