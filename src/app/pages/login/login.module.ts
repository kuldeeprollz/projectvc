import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AuthGuard } from '../../../../core/guards/auth.gaurd';
// import { AuthService } from '../../../../core/services/auth.service';

import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path     : '**',
        component: LoginComponent,
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  providers: [
    // AuthGuard,
    // AuthService
  ]
})
export class LoginModule { }
