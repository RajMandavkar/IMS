import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Header } from '../../header/header';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule,Header],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css'
})
export class AdminLogin {

 private http = inject(HttpClient);
  private router = inject(Router); 

  loginData = {
    email: '',
    pass: ''
  };

  onclick() {
    debugger
    const { email, pass } = this.loginData;

    if (!email || !pass) {
      debugger
      // alert('Please fill in all fields');
      Swal.fire("Error", "Please fill in all fields!", "error");
      return;
    }

    this.http.get<any[]>(`http://localhost:4000/admin?email=${email}&pass=${pass}`).subscribe({
      next: (res) => {
        debugger
        if (res.length > 0) {
          debugger
          Swal.fire("Success", "Signup Successfull, Kindly Login :)", "success");
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/admindash']);
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
