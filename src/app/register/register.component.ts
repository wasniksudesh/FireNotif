import { Component, OnInit ,Inject,NgModule} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {UserserviceService} from '../userservice.service'


export interface DialogData {
  userid: string;
  password: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserserviceService ,private dialog: MatDialog ,private router:Router,private route:ActivatedRoute ) {}
  userid: string;
  password: string;
  final: DialogData;

  openDialog(): void {

    const dialogRef = this.dialog.open(RegisterFun, {
      width: '250px',
      data:{ userid: this.userid, password : this.password}
    });
    dialogRef.afterClosed().subscribe(
      data=>(this.userservice.setinfo(data))
      )
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
