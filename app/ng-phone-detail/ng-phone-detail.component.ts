import { Component, OnInit } from '@angular/core';
declare const angular: any;
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'ng-phone-detail',
  template:  `
    <h1>Hello from phone detail Angular</h1>
  `
})
export class PhoneDetailComponent implements OnInit {
  
  constructor(
  ) {}

  ngOnInit() {
    console.log(  );
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
