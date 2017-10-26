import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserListComponent } from './user-list/user-list.component';
import { ArticlesComponent } from './articles/articles.component';

// const appRoutes: Routes = [];
// basico

// si el pathMatch esta es full hace redireccion

// export const appRoutingProviders :any[]=[];
// esto se lo ocupa el router para los servicios que se ocupen
const appRoutes: Routes = [
  { path : '' , redirectTo : 'login', pathMatch:'full'},
  { path : 'login' , component : LoginComponent },
  { path : 'dashboard' , component : DashboardComponent },
  { path : 'articles' , component : ArticlesComponent },
  { path : 'users-list' , component : UserListComponent },
  { path : '**' , redirectTo : 'login', pathMatch:'full'}
];


export const appRoutingProviders :any[]=[];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
