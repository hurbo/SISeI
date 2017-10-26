import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user: Observable<firebase.User>;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

}
