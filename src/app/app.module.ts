import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';



import { routing, appRoutingProviders } from './app.routing';




// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// Import AngularFire2
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4, database and auth
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


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
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    appRoutingProviders,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
