import { Injectable } from '@angular/core';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
    this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
          }
          else {
            this.userDetails = null;
          }
        }
      );
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
        console.log('Ya tienes una cuenta ?', err.message);
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
        console.log('Esta bien tu información', err.message);
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
      console.log('Es posble que no tengas activada la opcion de login anonimo en firebase', err.message);

    });
  }

  logout() {
    this.user = this.afAuth.authState;
    this.afAuth.auth.signOut();
    location.reload();
  }

}
