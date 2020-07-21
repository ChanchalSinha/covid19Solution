import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StateContentComponent } from './state-content/state-content.component';
import { GlobalHttpInterceptorService } from './services/global-http-interceptor.service';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component'
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    MainHeaderComponent,
    MainContentComponent,
    StateContentComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,    
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
