import { Component} from '@angular/core';

import {  Router, ActivatedRoute } from '@angular/router';
import {UserserviceService} from '../userservice.service'
export interface DialogData {
  userid: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  userid : string;
  password: string;
  loginmap;
  pass = false;
  returnUrl;
  constructor(private userservice:UserserviceService ,private router:Router,private route:ActivatedRoute ) {}
  ngOnInit(){
    this.userservice.getinfo().subscribe(res => (this.loginmap=res.data(), console.log("Found map!",this.loginmap)))
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    console.log("afasc",this.returnUrl);

  }

  onSubmit(){
    this.pass=true;
    console.log(this.loginmap.loginmap[this.userid],this.password)
    if (this.loginmap.loginmap[this.userid][0] === this.password ) {
      console.log('matched bro!!!',this.loginmap.loginmap[this.userid][1]);
      localStorage.setItem("id",this.loginmap.loginmap[this.userid][1])
      this.router.navigate([this.returnUrl])

    } else {
      console.log('not matched macha');
    }
  }
  
}


