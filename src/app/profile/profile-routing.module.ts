import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";


import { PreferencesComponent } from './preferences/preferences.component';
import { PostsComponent } from './posts/posts.component';

import { ProfileComponent } from './profile.component';


const profileRoutes : Routes = [
    {
      path : 'profile' ,
      component : ProfileComponent,
      children : [
        {path : 'preferences', component : PreferencesComponent },
        {path : 'posts/:id', component : PostsComponent },
        {path : '', redirectTo : 'preferences', pathMatch:'full'}
      ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class ProfileRoutingModule { }
