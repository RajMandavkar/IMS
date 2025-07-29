import { Component } from '@angular/core';
import { Router,  RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Header } from '../../header/header';

@Component({
  selector: 'app-user-dashboard',
  imports: [RouterModule,Header],
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css']
})
export class UserDashboard {
  constructor(private router: Router) {}

  logout() {
    debugger
    localStorage.removeItem('isLoggedIn');
    Swal.fire("Success", "Successfylly Logged Out, Please Relogin for Access)", "success");
    this.router.navigate(['/userLogin']);
  }
}

