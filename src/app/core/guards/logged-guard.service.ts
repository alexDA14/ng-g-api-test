import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public canActivate(): Observable<boolean> {
    if (!this.authService.isAuthenticated()) {
      return of(true);
    } else {
      this.router.navigate(['/details']);
      return of(false);
    }
  }
}
