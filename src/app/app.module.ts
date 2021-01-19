import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from './register/register.component';;
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './home/test/test.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    ListRestoComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TestComponent,
    ViewuserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
