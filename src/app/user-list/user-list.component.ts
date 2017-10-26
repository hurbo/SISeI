import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../providers/auth.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  newName: string = '';
  users: FirebaseListObservable<any[]>;

  selectedUser: any;

  constructor(public authService: AuthService, private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.users = this.af.list('/users');
  }




  Send(value: string) {
    this.users.push({ name: value });
    this.newName = '';
  }

  selectUser(value: any) {
    this.selectedUser = value;
  }

  update(tagen: any) {
    console.log(tagen);
    this.af.object('/users/' + tagen.$key)
      .update({ name: tagen.name });

  }

  deleteTodo(todo: any) {
    this.af.object('/users/' + todo.$key).remove();
  }




}
