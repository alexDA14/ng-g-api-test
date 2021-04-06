import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedGuard } from '../../core/guards/logged-guard.service';
import { SharedModule } from '../../shared/shared.module';
import { SignInComponent } from './sign-in.component';


const routes: Routes = [
  { path: '', component: SignInComponent, canActivate: [LoggedGuard] }
];

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SignInModule { }
