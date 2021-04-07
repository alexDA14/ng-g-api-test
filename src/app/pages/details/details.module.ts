import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: UserDetailsComponent },
];

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DetailsModule { }
