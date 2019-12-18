import { Injectable } from '@angular/core';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore'
import {AngularFireModule} from '@angular/fire'
export interface UserInfo{
  Devices: [];
  Friends: [];
  Requests: [];
}

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {
  constructor(private firestore:AngularFirestore) { }
  account=this.firestore.collection("Accounts").doc("Accounts")
  userinfo=this.firestore.collection("UserInfo")
  final= {  Devices: [localStorage.getItem("tokenval")],
    Friends: [],
    Requests: []};
  getinfo(){
    return this.account.snapshotChanges();
  }
  getvalue_getinfo(){
    return this.account.get().toPromise();
  }
  setinfo(data){
    let keyid;
    this.userinfo.add(this.final).then(function(docref){
      keyid= docref.id;
      return keyid
    }).then(res =>this.getvalue_getinfo()).then(function(text){
          let poop=text.data();
          poop.loginmap[data.userid]=[data.password,keyid];
          return poop
      }).then(res=>this.account.set(res));
    

  }
}
