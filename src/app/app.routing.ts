import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

// const appRoutes: Routes = [];
// basico

// si el pathMatch esta es full hace redireccion

// export const appRoutingProviders :any[]=[];
// esto se lo ocupa el router para los servicios que se ocupen
const appRoutes: Routes = [
  { path : '' , component : LoginComponent },
  { path : '' , redirectTo : 'login', pathMatch:'full'},
  { path : 'login' , component : LoginComponent },
  { path : 'dashboard' , component : DashboardComponent },
  { path : '**' , redirectTo : 'login', pathMatch:'full'}
];


export const appRoutingProviders :any[]=[];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
