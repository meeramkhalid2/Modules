import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModModule } from './mod/mod.module';
import { LoginComponent } from "./mod/login/login.component";


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginComponent
    ]
})
export class AppModule { }
