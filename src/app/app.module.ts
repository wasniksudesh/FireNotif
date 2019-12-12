import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material'
import { AppComponent } from './app.component';
import { LoginComponent, RegisterFun } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFun
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [RegisterFun],
  entryComponents:[RegisterFun],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
