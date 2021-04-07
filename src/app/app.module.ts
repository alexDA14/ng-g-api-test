import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './core/api/auth.service';
import { CoreModule } from './core/core.module';
import { loadAuth } from './core/initializers/load-authUser.initializer';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: loadAuth,
    deps: [AuthService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
