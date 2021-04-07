import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/api/auth.service';

@Component({
  selector: 'g-api-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userData: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userData = this.authService.getBasicUserData();
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
