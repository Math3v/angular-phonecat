import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { PhoneNameComponent } from './phone-name/phone-name.component';
import { PhoneService } from './core/phone/ng-phone.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule
  ],
  declarations: [
    PhoneNameComponent
  ],
  entryComponents: [
    PhoneNameComponent
  ],
  providers: [
    PhoneService
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
