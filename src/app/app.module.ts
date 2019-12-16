import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material'
import { AppComponent } from './app.component';
import { LoginComponent,} from './login/login.component';
import { RegisterComponent ,RegisterFun} from './register/register.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import{UserserviceService} from './userservice.service'
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  exports: [RegisterFun],
  entryComponents:[RegisterFun],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
