import { Component, OnInit } from '@angular/core';
declare const angular: any;
import { downgradeComponent } from '@angular/upgrade/static';

import { Phone } from '../core/phone/phone.service';

@Component({
  selector: 'ng-phone-detail',
  template:  `
    <h1>Hello from phone detail Angular</h1>
    <p>{{ phone | json }}</p>
  `
})
export class PhoneDetailComponent implements OnInit {
  
  phone: any;

  constructor(
    private phoneService: Phone
  ) {}

  ngOnInit() {
    this.phoneService.getPhoneResource().get({
      phoneId: 'motorola-xoom'
      }, (phone: any) => {
        this.phone = phone;
      }
    );
  }
}

angular.
  module('phoneDetail').
  directive(
    'ngPhoneDetail',
    downgradeComponent({
      component: PhoneDetailComponent
    })
  );
