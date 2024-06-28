import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LogoutComponent } from './logout/logout.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
    {path: 'logout',
        loadComponent:()=>import('./logout/logout.component').then((m)=>m.LogoutComponent)
       },
       {path: 'signout',
        loadComponent:()=>import('./signout/signout.component').then((m)=>m.SignoutComponent)
       },
//   {path: 'logout', component: LogoutComponent},
//   {path: 'signout', component: SignoutComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod1RoutingModule { }
