import { Routes } from '@angular/router';
import { AdminDashboard } from './Admin/admin-dashboard/admin-dashboard';
import { Home } from './home/home';
import { UserDashboard } from './User/user-dashboard/user-dashboard';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { UserLogin } from './User/user-login/user-login';
import { authGuard } from './auth-guard';


export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "SignUp",
        component: SignUp
    },
    {
        path: "userLogin",
        component: UserLogin
    },
    {
        path: "admindash",
        component: AdminDashboard
    },
    {
        path: "userdash",
        component: UserDashboard,
        canActivate: [authGuard]   
    },
];
