import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ModRoutingModule } from './mod-routing';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModRoutingModule,FormsModule,
    RegisterComponent, RouterModule.forChild(routes)
  ],
  exports:[
     RegisterComponent
  ]
})
export class ModModule { }
