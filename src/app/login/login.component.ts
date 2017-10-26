import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  user: Observable<firebase.User>;
  userEmail: string = '';
  userPassword: string = '';

  ngOnInit() {
    this.userEmail = 'txt userEmail';
    this.userPassword = 'txt userPassword';
  }

  login() {
    this.authService.loginAnonymously().then((data) => {
      this.router.navigate(['dashboard']);
    })
  }
  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['dashboard']);
    })
  }
  logout() {
    this.authService.logout();
    location.reload();
  }
  signup() {
    // TODO: Aqui desde formulario
    var email = "alfonso@torres.com";
    var password = "123456789";
    var solve = this.authService.signup(email, password);
    console.log(' signup quedo con  ', solve);
  }
  loginWithEmailAndPassword() {
    // TODO: Aqui desde formulario
    var email = "alfonso@torres.com";
    var password = "123456789";
    var solve = this.authService.loginWithEmailAndPassword(email, password);

    console.log('loginWithEmailAndPassword quedo con  ', solve);
  }

}
