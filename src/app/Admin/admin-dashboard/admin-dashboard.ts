import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {

   constructor(private router: Router) {}

onclick(){
      debugger
      localStorage.removeItem('isLoggedIn');
      Swal.fire("Success", "Successfylly Logged Out, Please Relogin for Access)", "success");
      this.router.navigate(['/adminLogin']);
    }
}


