import { NgModule } from '@angular/core';

import { SharedModules } from '../constants/modules.constants';

@NgModule({
  declarations: [],
  exports: [
    ...SharedModules
  ],
  imports: [
    ...SharedModules
  ]
})
export class SharedModule {
}
