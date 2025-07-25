import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';


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
      // alert("Please fill all the fields");
      Swal.fire("Error", "Please fill in all fields!", "error");
      return;
    }

    this.http.post("http://localhost:3000/users", this.loginData).subscribe({
      next: (res: any) => {
        Swal.fire("Success","Signup Successfull, Kindly Login :)","success");
         this.router.navigate(['/userLogin']);
      },
      error: (err) => {
        console.error('Error occurred:', err);
        // alert('Something went wrong while adding user');lll
        Swal.fire("Error", "Something went wrong while adding user!", "error");
      },
    });
  }

}