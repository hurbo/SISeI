import { Injectable } from '@angular/core';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

  }
  refreshUser(){
    this.user = this.afAuth.authState;
  }


  signup(email, password) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.user = this.afAuth.authState;
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  loginWithEmailAndPassword(email, password) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.user = value;
        this.user = this.afAuth.authState;

      })
      .catch(err => {
        console.log('Something went wrong:', err.message);

      });

  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  loginAnonymously() {
    return this.afAuth.auth.signInAnonymously()
    .then(value => {
      this.user = value;
      console.log('logeado anonimo ',value);
      this.user = this.afAuth.authState;
      
    })
    .catch(err => {
      console.log('Something went wrong:', err.message);

    });
  }

  logout() {
    this.user = this.afAuth.authState;
    this.afAuth.auth.signOut();
    location.reload();
  }

}
