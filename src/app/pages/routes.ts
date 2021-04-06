import { Routes } from '@angular/router';

import { LayoutComponent } from '../core/components/layout/layout.component';
import { AuthGuard } from '../core/guards/auth-guard.service';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'details', pathMatch: 'full'
      },
      {
        path: 'details',
        loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
      }
    ]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
