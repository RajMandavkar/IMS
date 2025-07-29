import { Component, inject } from '@angular/core';
import { AdminDashboard } from '../admin-dashboard/admin-dashboard';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  imports: [AdminDashboard,CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

users: any[] = [];

http = inject(HttpClient);

ngOnInit(): void {
  debugger
    this.http.get<any[]>('http://localhost:3000/users').subscribe((res:any)=>{
      debugger
      this.users = res
    });
    
  }

}
