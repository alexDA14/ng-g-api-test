import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) {}

  public canActivate(): Observable<boolean> {
    if (this.authService.isAuthenticated()) {
      return of(true);
    } else {
      this.authService.signOut();
      return of(false);
    }
  }
}
