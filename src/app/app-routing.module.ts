import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: './mod/login', pathMatch: 'full' },
  {path: '',
    loadChildren:()=>import('./mod/mod.module').then((m)=>m.ModModule) //back call (.then tells to wait till the function is compiled)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
