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


import {FormUploadComponent} from './upload/form-upload.component';
import {UploadFileService} from './upload/upload-file.service';


import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormUploadComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ProfileModule
  ],
  providers: [
    AuthService,
    appRoutingProviders,
    AngularFireDatabase,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
