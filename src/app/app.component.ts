import { Component } from '@angular/core';


import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './providers/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  msgVal: string = '';
  users: FirebaseListObservable<any[]>;

  selectedUser : any;




  constructor(public authService : AuthService, public afAuth: AngularFireAuth , private af: AngularFireDatabase) {

  }



  ngOnInit() {
    this.users = this.af.list('/users');
  }


  Send(value: string){
    this.users.push({ name: value });
    this.msgVal = '';
  }

  selectUser(value: any){
    this.selectedUser = value;
  }

  update(tagen: any){
    console.log(tagen);
    this.af.object('/users/' + tagen.$key)
    .update({ name: this.msgVal });

  }

  deleteTodo(todo: any) {
    this.af.object('/users/' + todo.$key).remove();
  }




}
