import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'admin',
        loadChildren:()=>import('./admin-module//admin-module.module').then(m=>m.AdminModuleModule)
    }
];
