import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    AdminProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    AuthModule,
    CustomersModule,
    NgbModule,
    HttpClientModule,
    CustomersModule,
    AuthModule,
    MatSidenavModule,
    ButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
