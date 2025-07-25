import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule,RouterModule,RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {

  private http = inject(HttpClient);
  private router =inject (Router)

  loginData: any = {
    userName: "",
    email: "",
    pass: "",
  };

  onclick() {
    if (!this.loginData.userName || !this.loginData.email || !this.loginData.pass) {
      alert("Please fill all the fields");
      return;
    }

    this.http.post("http://localhost:3000/users", this.loginData).subscribe({
      next: (res: any) => {
        alert('Registered Successfully');
         this.router.navigate(['/userLogin']);
      },
      error: (err) => {
        console.error('Error occurred:', err);
        alert('Something went wrong while adding user');
      },
    });
  }

}