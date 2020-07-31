import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AuthGuard } from '../../../../core/guards/auth.gaurd';
// import { AuthService } from '../../../../core/services/auth.service';

import { JoinComponent } from './join.component';

const routes: Routes = [
    {
        path     : '**',
        component: JoinComponent,
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JoinComponent],
  providers: [
    // AuthGuard,
    // AuthService
  ]
})
export class JoinModule { }
