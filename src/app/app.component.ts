import { Component } from '@angular/core';
import {MessagingService} from "./messaging.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message;
  constructor(private messagingService:MessagingService){}
  title = 'FireNotif';

  ngOnInit(){
    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
    }
}
