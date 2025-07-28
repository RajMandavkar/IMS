import { Component } from '@angular/core';
import { AdminDashboard } from '../admin-dashboard/admin-dashboard';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [AdminDashboard,RouterModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

}
