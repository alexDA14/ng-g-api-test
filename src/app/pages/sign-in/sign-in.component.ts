import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../core/api/auth.service';

@Component({
  selector: 'g-api-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnDestroy {
  private subs: Subscription = new Subscription();

  constructor(private authService: AuthService) { }

  public showSignIn(): void {
    this.subs.add(
      this.authService.signIn()
        .subscribe(() => this.afterSuccess())
    );
  }

  private afterSuccess(): void {
    this.authService.goTo('/details');
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
