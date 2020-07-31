import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import {JoinComponent } from './pages/join/join.component';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';



const routes: Routes = [

//   { path: 'join/:id', component: JoinComponent,


//   children: [
      
      

  
//     {
//     path: '',
//     loadChildren:
//       "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
//   }
// ]},

 
 {
    path: '',
    component: AdminLayoutComponent,
    children: [
      
      

        {path: '', redirectTo: '/login', pathMatch: 'full'},
        {
        path: '',
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  }, 

  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'join/:id',
    loadChildren: './pages/join/join.module#JoinModule'
  },

  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  

  
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
