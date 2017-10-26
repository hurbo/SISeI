import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }
    public userEmail: string;
    public userPassword: string;

  ngOnInit() {
    this.userEmail = '';
    this.userPassword = '' ;
  }


  loginWithEmailAndPassword(email,password){
    this.authService.loginWithEmailAndPassword(email, password);
  }
  signup(email,password){
    this.authService.signup(email, password);
  }


}
