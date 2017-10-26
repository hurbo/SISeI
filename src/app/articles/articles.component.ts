import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../providers/auth.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articleName: string = '';
  content: string = '';
  articles: FirebaseListObservable<any[]>;

  selectedArticle: any;

  constructor(public authService: AuthService, private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.articles = this.af.list('/articles');
  }


    addArticle(value: string) {
      this.articles.push({ name: value , content : this.content});
      this.articleName = '';
    }



    selectArticle(value: any) {
      this.selectedArticle = value;
      this.content = this.selectedArticle.content;
    }

    updateArticle(tagen: any) {
      console.log(tagen);
      this.af.object('/articles/' + tagen.$key)
        .update({ name: tagen.name, content : this.content});

    }

    deleteArticle(todo: any) {
      this.af.object('/articles/' + todo.$key).remove();
    }


}
