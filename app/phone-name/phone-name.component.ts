import { Component, Input, OnInit } from '@angular/core';
declare const angular: any;
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'phone-name',
  template: `
    <h1>{{ name }}</h1>
  `
})
export class PhoneNameComponent implements OnInit {
  @Input() name: string;

  ngOnInit() {
    console.log('Phone name initialized ' + this.name );
  }
}

angular.
  module('phoneDetail').
  directive(
    'phoneName',
    downgradeComponent({
      component: PhoneNameComponent,
      inputs: ['name']
    }) as angular.IDirectiveFactory
  );
