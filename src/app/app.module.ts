import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { routing, appRoutingProviders } from './app.routing';

// Import AuthService provider
import { AuthService } from './providers/auth.service';

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
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticlesComponent } from './articles/articles.component';



import { ProfileModule } from './profile/profile.module';
import { TestHooksComponent } from './test-hooks/test-hooks.component';
import { FileDropDirective } from './directives/file-drop.directive';
import { UploadFormComponent } from './upload-form/upload-form.component';




export const firebaseConfig = {
  apiKey: "AIzaSyBGavdHxQVsOUOcYNNzc5tvyJHqlEgOLEU",
  authDomain: "yeay-95f3e.firebaseapp.com",
  databaseURL: "https://yeay-95f3e.firebaseio.com",
  projectId: "yeay-95f3e",
  storageBucket: "",
  messagingSenderId: "111114367138"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileDropDirective,
    UploadFormComponent,
    DashboardComponent,
    NavbarComponent,
    UserListComponent,
    ArticlesComponent,
    TestHooksComponent
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
    AngularFireAuthModule,
    ProfileModule
  ],
  providers: [
    AuthService,
    appRoutingProviders,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
