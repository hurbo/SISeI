import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

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

  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) {

    this.alumno = new Alumno();
    this.alumno.param1 = "Tus valores desde aqui";




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
          console.log("Logged in ",);
          if(this.router.routerState.snapshot.url === '/login'){
            this.router.navigate(['/dashboard']);
          }

        }
      }
    );
  }



  ngOnInit() {

  }






}
