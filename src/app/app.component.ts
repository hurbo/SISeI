import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  // items: FirebaseListObservable<any[]>;

  msgVal: string = '';

  title = 'app';
  items = ['1','2','3'];



  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = this.afAuth.authState;

    console.log('user ', this.user);
  }



  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    console.log('send ',desc);
    this.msgVal = '';
  }

}
