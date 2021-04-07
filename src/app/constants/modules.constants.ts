import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

const MaterialModules = [
  MatSnackBarModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
];

export const SharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
  ...MaterialModules
];
