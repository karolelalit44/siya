
import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent, title: 'Login - siya' },

    {
        path: "", loadChildren: () => import("./core/pages/home/home.module").then((m) => m.HomeModule),
    },

    { path: '**', redirectTo: '/login' }

];
