import { Component } from '@angular/core';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  msgVal: string = '';
  users: FirebaseListObservable<any[]>;

  selectedUser : any;


  title = 'app';
  user: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth, private af: AngularFireDatabase) {
    this.user = this.afAuth.authState;
    console.log('este ususario ', this.user);

  }



  ngOnInit() {
    if(this.user){
      console.log('si existe');
    }
    this.users = this.af.list('/users');
    console.log('this.users ' ,this.users)
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
    this.af.object('/todos/' + todo.$key).remove();
  }


  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }



}
