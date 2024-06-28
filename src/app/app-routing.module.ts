import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'mod',
    loadChildren:()=>import('./mod/mod.module').then((m)=>m.ModModule)
   },
   {path: 'mod1',
    loadChildren:()=>import('./mod1/mod1.module').then((m)=>m.Mod1Module) //back call (.then tells to wait till the function is compiled)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
