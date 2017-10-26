import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { Router } from '@angular/router';

import { Alumno } from './models/alumno';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public alumno: Alumno;

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router) {

    this.alumno = new Alumno();
    this.alumno.param1 = "Tus valores desde aqui";

    console.log('Desde modelo ', this.alumno)

    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.email;
          this.user_email = auth.email;
          console.log("Logged in");
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }



  ngOnInit() {

  }


}
