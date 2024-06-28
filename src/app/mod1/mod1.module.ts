import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { SignoutComponent } from './signout/signout.component';
import { Mod1RoutingModule } from './mod1-routing';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Mod1RoutingModule, LogoutComponent,
    SignoutComponent
  ],
  exports:[
    LogoutComponent,
    SignoutComponent
  ]
})
export class Mod1Module { }
