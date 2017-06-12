import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
declare const angular: any;
import { downgradeInjectable } from '@angular/upgrade/static';
import { Http } from '@angular/http';

@Injectable()
export class PhoneService {

  constructor(
    private http: Http
  ) {}
  
  getPhones(): Observable<any> {
    return this.http.get('/app/phones/phones.json');
  }
}

angular.
  module('core.phone').
  factory('PhoneService', downgradeInjectable(PhoneService));
