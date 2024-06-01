import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddtoCartComponent } from './addto-cart/addto-cart.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'add',
        component:AddtoCartComponent
    }
];
