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
  todos$: FirebaseListObservable<any[]>;

  selectedUser : any;


  title = 'app';
  user: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth, private af: AngularFireDatabase) {
    this.user = this.afAuth.authState;

  }



  ngOnInit() {
    this.todos$ = this.af.list('/users');
    console.log('this.todos$ ' ,this.todos$)
  }


  Send(value: string){
    this.todos$.push({ name: value });
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
