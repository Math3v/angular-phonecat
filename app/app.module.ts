import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';

import { PhoneNameComponent } from './phone-name/phone-name.component';
import { PhoneDetailComponent } from './ng-phone-detail/ng-phone-detail.component';
import { PhoneService } from './core/phone/ng-phone.service';

import { phoneServiceProvider } from './ajs-upgraded-providers';
import { NgDropdownSelectComponent } from './ng-dropdown-select/ng-dropdown-select.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule
  ],
  declarations: [
    PhoneNameComponent,
    PhoneDetailComponent,
    NgDropdownSelectComponent
  ],
  entryComponents: [
    PhoneNameComponent,
    PhoneDetailComponent,
    NgDropdownSelectComponent
  ],
  providers: [
    PhoneService,
    phoneServiceProvider
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
