import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {


    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth !== null) {
          if (this.router.routerState.snapshot.url === '/login') {
            this.router.navigate(['/dashboard']);
          }
        }
      }
    );



  }
  public userEmail: string;
  public userPassword: string;

  ngOnInit() {
    this.userEmail = '';
    this.userPassword = '';
  }


  loginWithEmailAndPassword(email, password) {
    this.authService.loginWithEmailAndPassword(email, password);
  }
  signup(email, password) {
    this.authService.signup(email, password);
  }


}
