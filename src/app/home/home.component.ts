import { Component, OnInit ,Inject,NgModule} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idd: string;
  returnUrl;
  devices;
  tokenval;
  userinfo: any;
  constructor(private route: ActivatedRoute,private router: Router,private userservice:UserserviceService) { }

  ngOnInit() {
    this.tokenval=localStorage.getItem("tokenval")
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
    this.idd= localStorage.getItem("id");
    if(this.idd==null){
      this.router.navigate([this.returnUrl])
    }
    this.userservice.fullinfo(localStorage.getItem("id")).then(res=>this.userinfo=res.data());
    


  }

}
