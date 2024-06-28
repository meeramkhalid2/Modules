import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ModRoutingModule } from './mod-routing';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModRoutingModule, LoginComponent,RegisterComponent
  ],
  exports:[
    LoginComponent, RegisterComponent
  ]
})
export class ModModule { }
