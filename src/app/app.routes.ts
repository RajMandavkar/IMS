import { Routes } from '@angular/router';
import { AdminDashboard } from './Admin/admin-dashboard/admin-dashboard';
import { Home } from './home/home';
import { UserDashboard } from './User/user-dashboard/user-dashboard';
import { SignUp } from './sign-up/sign-up';
import { UserLogin } from './User/user-login/user-login';
import { authGuard } from './auth-guard';
import { AdminLogin } from './Admin/admin-login/admin-login';
import { UserList } from './Admin/user-list/user-list';
import { AddProduct } from './Admin/add-product/add-product';


export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "adminLogin",
        component: AdminLogin
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
        canActivate:[authGuard]   
    },
    {
        path: "userlist",
        component: UserList,
        canActivate:[authGuard]   
    },
    {
        path: "addProduct",
        component: AddProduct,
        canActivate:[authGuard]   
    },
];
