import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ProfileRoutingModule } from './profile-routing.module';



import { ProfileComponent } from './profile.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PostsComponent } from './posts/posts.component';





@NgModule({
  declarations: [
    ProfileComponent,
    PreferencesComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }



//en el modulo podemos poner un export para poder usarlos componente fuera del modulo tambien se pueden agregar servicios
