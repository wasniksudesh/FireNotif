import { Component, OnInit ,Inject,NgModule} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import '@firebase/firestore'


const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyD0SiHIL2iEsJ7CnZYeBhPIvpXbWoh6kAU",
  authDomain: "firenotif-sudesh.firebaseapp.com",
  databaseURL: "https://firenotif-sudesh.firebaseio.com",
  projectId: "firenotif-sudesh",
  storageBucket: "firenotif-sudesh.appspot.com",
  messagingSenderId: "328330242422",
  appId: "1:328330242422:web:c2b97719ffe3cb4a8af257",
  measurementId: "G-S5P0E95X2W"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings)

export interface DialogData {
  userid: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog ,private router:Router,private route:ActivatedRoute ) {}
  userid: string;
  password: string;
  final: DialogData;
  ref = firebase.firestore().collection('newone').doc('first');

  openDialog(): void {

    const dialogRef = this.dialog.open(RegisterFun, {
      width: '250px',
      data:{ userid: this.userid, password : this.password}
    });
    dialogRef.afterClosed().subscribe(
      data=>this.final=data
      )
    dialogRef.afterClosed().subscribe(
      data=>console.log(this.final,"gold haiye")
    )
    dialogRef.afterClosed().subscribe(data=> console.log(this.register(this.final)))
  }
    register(data): void{
      this.ref.set(data)
    }
  
  ngOnInit() { }
}


@Component({
  selector: 'registerfun',
  templateUrl: 'fun.html',
})
export class RegisterFun {

  constructor(
    public dialogRef: MatDialogRef<RegisterFun>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  save():void{
    this.dialogRef.close(this.data);
  }
}
