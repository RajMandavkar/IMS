import { Routes } from '@angular/router';
import { AdminDashboard } from './Admin/admin-dashboard/admin-dashboard';
import { Home } from './home/home';
import { UserDashboard } from './User/user-dashboard/user-dashboard';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { UserLogin } from './User/user-login/user-login';


export const routes: Routes = [
    {
        path:"admindash",
        component:AdminDashboard
    },
    {
        path:"userdash",
        component:UserDashboard
    },  
    {
        path:"",
        component:Home
    },
    
    {
        path:"login",
        component:Login
    },
    {
        path:"SignUp",
        component:SignUp
    },
    {
        path:"userLogin",
        component:UserLogin
    },
];
