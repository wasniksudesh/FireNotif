import { Injectable } from '@angular/core';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore'
import {AngularFireModule} from '@angular/fire'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private firestore:AngularFirestore) { }
  
  getinfo(){
    return this.firestore.collection("Accounts").doc("Accounts").snapshotChanges();
  }
  getvalue_getinfo(){
    console.log('this si getval')
    return this.firestore.collection("Accounts").doc("Accounts").get().toPromise();
  }
  setinfo(data){
    console.log("inside service file")
    var keep;
    // this.getvalue_getinfo().then(res=> console.log("final",res.data()))
    this.getvalue_getinfo().then(function(text){
      let poop=text.data();
      poop.loginmap[data.userid]=[data.password," "];
      return poop
    }).then(res=>this.firestore.collection("Accounts").doc("Accounts").set(res)).then(res=>console.log('this is really new for me YAYYA!!!!'));
  }
}
