import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit() {

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
  logout(){
    this.authService.logout().then(()=>{
      this.router.navigate(['login']);
    })
  }
  signup(){
    // TODO: Aqui desde formulario
    var email = "alfonso@torres.com";
    var password = "123456789";
    var solve = this.authService.signup(email ,password);
    console.log(' signup quedo con  ',solve );
  }
  loginWithEmailAndPassword(){
    // TODO: Aqui desde formulario
    var email = "alfonso@torres.com";
    var password = "123456789";
    var solve = this.authService.loginWithEmailAndPassword(email ,password);
    console.log('loginWithEmailAndPassword quedo con  ',solve );
  }

}
