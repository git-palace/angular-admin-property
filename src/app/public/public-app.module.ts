import { NgModule } from '@angular/core';

import { PublicAppComponent } from './public-app.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ROUTER_CONFIG } from './public-app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  exports: [],
  declarations: [
    PublicAppComponent,
    HomeComponent
  ],
  providers: [],
})
export class PublicAppModule {
}
