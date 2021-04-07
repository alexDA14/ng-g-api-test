import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authInstance: any;

  constructor(
    private router: Router,
    private ngZone: NgZone
  ) {
  }

  public signIn(): Observable<any> {
    return from(this.authInstance?.signIn());
  }

  public signOut(): void {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/sign-in']);
      return;
    }

    this.authInstance.signOut();
    this.authInstance.isSignedIn.listen(isSigned => {
      if (!isSigned) {
        this.goTo('/sign-in');
      }
    });
  }

  public isAuthenticated(): boolean {
    if (!this.authInstance) {
      return false;
    }

    return this.authInstance.isSignedIn.get();
  }

  public getBasicUserData(): any {
    return this.authInstance.currentUser.get().getBasicProfile();
  }

  public initGoogleAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
      gapi.load('auth2', async () => {
        const gAuth = await gapi.auth2.init({
          client_id: environment.apiClientId,
          fetch_basic_profile: true
        });
        this.authInstance = gAuth;
        resolve(gAuth);
      }, reject);
    });
  }

  public goTo(path: string): void {
    this.ngZone.run(() => this.router.navigate([path]));
  }
}
