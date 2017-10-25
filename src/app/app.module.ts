import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Forms
import { FormsModule } from '@angular/forms';

// Import Http
import { HttpModule } from '@angular/http';


// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// Import AngularFire2
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4, database and auth
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


export const firebaseConfig = {
  apiKey: "AIzaSyBLVg7bCMEiRG7xD4eu4_sv5G6BqAd1JUU",
  authDomain: "go-angular-f9e0f.firebaseapp.com",
  databaseURL: "https://go-angular-f9e0f.firebaseio.com",
  projectId: "go-angular-f9e0f",
  storageBucket: "go-angular-f9e0f.appspot.com",
  messagingSenderId: "387596480886"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
