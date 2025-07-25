import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {
  private http = inject(HttpClient);
  private router = inject(Router); 

  loginData = {
    email: '',
    pass: ''
  };

  onclick() {
    const { email, pass } = this.loginData;

    if (!email || !pass) {
      // alert('Please fill in all fields');
      Swal.fire("Error", "Please fill in all fields!", "error");
      return;
    }

    this.http.get<any[]>(`http://localhost:3000/users?email=${email}&pass=${pass}`).subscribe({
      next: (res) => {
        debugger
        if (res.length > 0) {
          debugger
          Swal.fire("Success", "Signup Successfull, Kindly Login :)", "success");
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/userdash']);
        } else {
          debugger
          // alert('Invalid email or password');
          Swal.fire("Error", "Invalid email or password!", "error");
        }
      },
      error: (err) => {
        debugger
        // console.error('Login error:', err);
        Swal.fire("Error", "Something went wrong. Try again later.!", "error");
      }
    });
  }
}
