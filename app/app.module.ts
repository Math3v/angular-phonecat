import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { PhoneNameComponent } from './phone-name/phone-name.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    PhoneNameComponent
  ],
  entryComponents: [
    PhoneNameComponent
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
