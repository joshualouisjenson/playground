import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRouterModule } from './router';
import { HomeModule } from '../pages/home/home.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRouterModule,
        HomeModule
    ],
    providers: [
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
